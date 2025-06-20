#!/bin/bash

# Healthcare Dashboard Deployment Script for AWS EC2

echo "Starting deployment of Healthcare Dashboard..."

# Update system packages
sudo yum update -y

# Install Docker if not already installed
if ! command -v docker &> /dev/null; then
    echo "Installing Docker..."
    sudo yum install -y docker
    sudo systemctl start docker
    sudo systemctl enable docker
    sudo usermod -a -G docker ec2-user
fi

# Install Docker Compose if not already installed
if ! command -v docker-compose &> /dev/null; then
    echo "Installing Docker Compose..."
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
fi

# Create application directory
sudo mkdir -p /opt/healthcare-dashboard
cd /opt/healthcare-dashboard

# Copy application files (assuming they're uploaded to the server)
# In a real deployment, you'd pull from a git repository or copy from S3

# Build and start the application
echo "Building and starting the application..."
sudo docker-compose down
sudo docker-compose build
sudo docker-compose up -d

# Setup nginx reverse proxy (optional)
if command -v nginx &> /dev/null; then
    echo "Configuring Nginx reverse proxy..."
    sudo tee /etc/nginx/conf.d/healthcare-dashboard.conf > /dev/null <<EOF
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF
    sudo systemctl restart nginx
fi

echo "Deployment completed! Application should be running on port 3000"
echo "If using Nginx, it's also available on port 80"
