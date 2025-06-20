# Healthcare Dashboard

A comprehensive healthcare workforce management dashboard for monitoring nurse risk analytics, turnover, and retention planning.

## Features

- **Dashboard Overview**: Workforce metrics, supply/demand analytics, and turnover insights
- **Individual Nurse Profiles**: Detailed risk analytics, SDOH insights, and retention planning
- **Risk Assessment**: High-risk and moderate-risk nurse identification
- **Financial Impact Analysis**: Value-to-enterprise calculations and retention multipliers
- **Interactive Charts**: Real-time data visualization using Recharts

## Installing Dependencies & Running Locally

First, clone this repository using git clone and cd into the folder.

Install the necessary packages

```bash
npm install \
  recharts \
  @radix-ui/react-avatar \
  @radix-ui/react-dialog \
  @radix-ui/react-dropdown-menu \
  @radix-ui/react-label \
  @radix-ui/react-progress \
  @radix-ui/react-separator \
  @radix-ui/react-slot \
  @radix-ui/react-tabs \
  @radix-ui/react-toast \
  @radix-ui/react-tooltip \
  class-variance-authority \
  clsx \
  lucide-react \
  tailwind-merge \
  tailwindcss-animate

```

Install pnpm for easier installation of ShadCN UI Components

```bash
npm install -g pnpm
```

Install ShadCN UI Components

```bash
npx shadcn@latest init
npx shadcn@latest add avatar button card badge tabs separator
```

To run the app locally, run 

```bash
npm run dev
```
in your terminal in the same directory and open [http://localhost:3000](http://localhost:3000) in your browser.

## AWS EC2 Deployment

### Prerequisites

- AWS EC2 instance (t3.medium or larger recommended)
- Security group allowing inbound traffic on ports 22 (SSH), 80 (HTTP), and 3000
- Key pair for SSH access

### Deployment Steps

1. **Connect to your EC2 instance:**
   \`\`\`bash
   ssh -i your-key.pem ec2-user@your-ec2-public-ip
   \`\`\`

2. **Upload your application files to the server** (using SCP, Git, or S3)

3. **Run the deployment script:**
   \`\`\`bash
   chmod +x deploy.sh
   ./deploy.sh
   \`\`\`

4. **Access your application:**
   - Direct access: `http://your-ec2-public-ip:3000`
   - Via Nginx (if configured): `http://your-ec2-public-ip`

### Manual Deployment

If you prefer manual deployment:

1. Install Docker and Docker Compose
2. Build the application: `docker-compose build`
3. Start the services: `docker-compose up -d`

### Environment Variables

Create a `.env.local` file for any environment-specific configurations:

\`\`\`env
NODE_ENV=production
PORT=3000
\`\`\`

### Monitoring

Monitor your application logs:
\`\`\`bash
docker-compose logs -f healthcare-dashboard
\`\`\`

### Scaling

For production use, consider:
- Using an Application Load Balancer
- Setting up auto-scaling groups
- Implementing health checks
- Using RDS for database storage
- Setting up CloudWatch monitoring

## Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Charts**: Recharts
- **Deployment**: Docker, Docker Compose
- **Infrastructure**: AWS EC2, Nginx (optional)
