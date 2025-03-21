# Applied Machine Learning Visualization Project

A visual summary of plots from the Applied Machine Learning lecture. This repository contains visualizations created with Plotly and Matplotlib during the course.

## Project Overview

This project showcases various data visualizations from the Applied Machine Learning course, including:

- Welding sample analysis (Matplotlib)
- Interactive welding sample visualization (Plotly)
- 3D cluster analysis (Plotly)
- 3D quality analysis (Plotly)

## GitHub Pages

You can view the visualizations on our GitHub Pages site: [https://[username].github.io/aml-demo](https://[username].github.io/aml-demo)

### Automated Deployment

This repository is configured with GitHub Actions to automatically deploy to GitHub Pages whenever changes are pushed to the main branch. No manual setup required!

The workflow:
1. Automatically builds and deploys the site
2. Sets up the GitHub Pages configuration
3. Makes the site available at the URL above

If you want to manually trigger a deployment, you can use the "Actions" tab in the GitHub repository.

## Local Setup

To view these visualizations locally:

1. Clone the repository:
   ```
   git clone https://github.com/[username]/aml-demo.git
   ```

2. Open `index.html` in your web browser to see all visualizations.

## Directory Structure

- `ex_01_plots/`: Contains Matplotlib PNG visualizations
- `ex_02_plots/`: Contains Plotly HTML visualizations for exercise 2
- `ex_03_plots/`: Contains Plotly HTML visualizations for exercise 3
- `.github/workflows/`: Contains GitHub Actions workflow for automated deployment

## Technologies Used

- HTML/CSS for the web page
- Bootstrap for styling
- Matplotlib for static visualizations
- Plotly for interactive visualizations
- GitHub Actions for automated deployment