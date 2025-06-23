# Healthcare Dashboard

A comprehensive healthcare workforce management dashboard for monitoring nurse risk analytics, turnover, and retention planning.

## Features

- **Dashboard Overview**: Workforce metrics, supply/demand analytics, and turnover insights
- **Individual Nurse Profiles**: Detailed risk analytics, SDOH insights, and retention planning
- **Risk Assessment**: High-risk and moderate-risk nurse identification
- **Financial Impact Analysis**: Value-to-enterprise calculations and retention multipliers
- **Interactive Charts**: Real-time data visualization using Recharts

## Installing Dependencies & Running Locally

First, clone this repository using `git clone <repo_url>` and cd into the folder using `cd <repo_name>`.

Run the following commands to install the necessary packages. 

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