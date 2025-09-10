# Gemini Project Context: Pediatric Software Data Extraction

This document provides context for the AI assistant to understand and effectively work on this project.

## Project Overview

This is a TypeScript-based data processing pipeline for "Nutriped," a pediatric nutrition application. Its primary purpose is to extract and transform complex pediatric and nutritional data from various sources (Excel files from WHO, clinical protocols) into a structured JSON format. This processed data is then used by the Nutriped application to assist healthcare professionals in managing and evaluating the nutritional status of pediatric patients.

The project is structured to handle different data domains, including:

*   **Growth References:** WHO growth charts (e.g., weight-for-age, height-for-age).
*   **Clinical References:** Clinical signs, diagnostic rules, complications.
*   **Treatments:** Medicines, therapeutic milks, and nutritional products.
*   **Indicators:** Combining raw data with metadata for use in the application.

The final output is a `PediatricSoftWareData.zip` archive containing all the processed JSON files, ready for integration into the Nutriped application.

## Building and Running

The project uses `ts-node` to execute TypeScript files directly. Key commands are defined in `package.json`:

*   **`yarn build`**: Executes the main data extraction and transformation script (`extract_all.ts`). This is the primary command for processing all data.
*   **`yarn create-data-zip`**: Creates a zip archive of the `processed_data` directory.
*   **`yarn move`**: Moves necessary assets to the `dist` directory.
*   **`yarn build:zip:move`**: A convenience script that runs the `build`, `create-data-zip`, and `move` commands in sequence.

## Development Conventions

*   **Orchestration:** The main script `extract_all.ts` orchestrates the entire data processing pipeline by calling individual "saver" functions for each data domain.
*   **Data Domains:** The `src` directory is organized by data domains (e.g., `GrowthRef`, `ClinicalRef`, `Medicines`). Each domain has its own files for data extraction, transformation, and saving.
*   **Types:** All data structures are strongly typed using TypeScript interfaces and types, which are defined in the `types` directory.
*   **Data Flow:**
    1.  Raw data is stored in the `assets` directory.
    2.  Scripts in `src` read this raw data, process it, and save it as JSON files.
    3.  The processed JSON files are stored in the `processed_data` directory.
    4.  The `utils/createProcessedDataZip.ts` script packages the contents of `processed_data` into a zip file in the `dist` directory.
*   **Modularity:** The use of `index.ts` files in `src` and `types` provides a clean, modular way to export and import modules and types across the project.
