# AML Project: Welding Quality Prediction

## Project Description

This project focuses on predicting welding quality based on time-series data of electrical current and voltage measurements. The analysis employs various machine learning techniques to extract meaningful features from welding process data, identify patterns through clustering, and build predictive models for quality classification.

## Dataset Details

- **Source**: [Zenodo Welding Dataset](https://zenodo.org/records/10017718)
- **Content**: Current and voltage time series data from welding processes
- **Sampling**: Synchronously sampled at 100 kHz frequency with maximum permissible error of 0.5%
- **Size**: Approximately 362,034 samples
- **Structure**: Each sample contains 200 time steps of both current and voltage measurements (shape: [samples, 200, 2])

## Interactive Welding Data Visualization
[View the interactive visualization](https://yahah100.github.io/aml-demo/)

## Project Structure

### Part 1: Data Processing and Exploration
1. **Data Loading and Preprocessing (ex_01)**
   - Reading and preprocessing raw welding data
   - Converting time series into structured arrays

2. **Data Visualization and Analysis (ex_02)**
   - Creating plots to understand data distribution
   - Generating tables of statistical properties
   - Visualizing time series characteristics

3. **Feature Extraction (ex_03)**
   - Extracting meaningful features from time series
   - Statistical features (mean, std, min, max, median)
   - Frequency domain features (dominant frequencies)
   - Power-related features

4. **Clustering Analysis (ex_04)**
   - Custom K-means implementation with multiple distance metrics
     - Euclidean, Manhattan, and DTW (Dynamic Time Warping)
   - Dimension reduction with PCA for visualization
   - Cluster analysis to identify patterns in welding data

### Part 2: Classification and Model Evaluation
1. **Classification Models (ex_05)**
   - Implementation of Random Forest classifier
   - Feature importance analysis for quality prediction
   - Hyperparameter tuning

2. **Model Comparison**
   - Evaluating different machine learning algorithms
   - Performance metrics analysis
   - Model selection based on accuracy and robustness

## Implementation Details

- **Programming Language**: Python
- **Key Libraries**: NumPy, Pandas, Scikit-learn, Matplotlib, Plotly, Seaborn
- **Custom Implementation**: K-means algorithm with multiple distance metrics
- **Interactive Visualization**: Web-based visualization for exploring welding data

## Current Progress

- Data loading and preprocessing functionality is implemented
- Feature extraction from time series data is operational
- Custom K-means clustering with multiple distance metrics is implemented
- Initial classification analysis with Random Forest is being performed
- Feature importance analysis to identify key predictors of welding quality

## Future Work

- Complete classification model development with hyperparameter optimization
- Compare multiple classification algorithms to determine the most effective approach
- Expand the interactive visualization capabilities for better data exploration
- Potentially explore deep learning approaches for time series analysis




