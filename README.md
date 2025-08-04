# Gendiff – Difference Calculator CLI

[![Actions Status](https://github.com/she1nXgod/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/she1nXgod/frontend-project-46/actions)
[![Node Status](https://github.com/she1nXgod/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/she1nXgod/frontend-project-46/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=she1nXgod_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=she1nXgod_frontend-project-46)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=she1nXgod_frontend-project-46&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=she1nXgod_frontend-project-46)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=she1nXgod_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=she1nXgod_frontend-project-46)

> A CLI utility for comparing configuration files and showing differences.

### Requirements
- Node.js **v14+**
- **Linux / macOS / Windows**

### Features
- Supports **.json**, **.yaml**, **.yml** file formats  
- Handles **nested** data structures
- Accepts **absolute and relative** file paths
- Outputs differences in:
  - `stylish` format (default)
  - `plain` format
  - `json` format

### Installation
```bash
git clone https://github.com/she1nXgod/frontend-project-46.git
cd frontend-project-46
make install
npm link
```

### Usage
```
gendiff [options] <filepath1> <filepath2>
```
To display help information, use:
```bash
gendiff -h
```

### Demonstration
#### <pre>Stylish format (.json)</pre> 
[![asciicast](https://asciinema.org/a/WgJtPZax6iLpTj4T9deKcxhCN.svg)](https://asciinema.org/a/WgJtPZax6iLpTj4T9deKcxhCN)

#### <pre>Plain format (.yaml)</pre>
[![asciicast](https://asciinema.org/a/uiBe8XsjAJqVum45bF9HKLAxR.svg)](https://asciinema.org/a/uiBe8XsjAJqVum45bF9HKLAxR)

#### <pre>JSON format (.yml)</pre>
[![asciicast](https://asciinema.org/a/PRKORM7fHCn8cuqjRDhlRjleP.svg)](https://asciinema.org/a/PRKORM7fHCn8cuqjRDhlRjleP)
