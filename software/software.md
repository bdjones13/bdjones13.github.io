---
permalink: /software/
title: "TDA Software: PETLS, CACTIS | Persistent Laplacian & Flag Complex Tools"
toc: true
description: "Open-source TDA software including PETLS for persistent Laplacian computations, CACTIS for time series analysis with flag complexes, and tools for directed flag complexes. Python and C++ implementations by Ben Jones."
keywords: "PETLS, TDA software, persistent Laplacian, flag complex, directed flag complex, topological data analysis, computational topology, Python TDA, C++ topology"
---

## CACTIS: Coarse-grained Asymmetric Cycles in Time Series

**CACTIS** is a Python library for applying **topological data analysis (TDA)** to time series using **directed flag complexes** and persistent homology. It extracts coarse-grained asymmetric cycles from temporal data for applications in dynamical systems and climate science.

* [Documentation for CACTIS](https://cactismath.github.io/)
* [GitHub Repository](https://github.com/cactismath/CACTIS)
* [arXiv paper for CACTIS](https://arxiv.org/abs/2601.04559)

## PETLS: <u>Pe</u>rsistent <u>T</u>opological <u>L</u>aplacian <u>S</u>oftware

**PETLS** is a high-performance **C++ library with Python bindings** for efficiently computing **persistent Laplacians** in **topological data analysis (TDA)**. It provides order-of-magnitude speedups over existing implementations for persistent Laplacian computations on various complexes including Rips complexes, alpha complexes, **flag complexes**, and cellular sheaves.

**Key features:**
- Fast persistent Laplacian eigenvalue computation
- Support for multiple complex types (Rips, Alpha, **directed flag complexes**)
- Python interface: `pip install petls`
- Applications to molecular biology, network analysis, and computational topology

**Resources:**
* [PETLS Documentation](PETLS/index.html)
* [GitHub Repository](https://github.com/bdjones13/PETLS/)
* [arXiv paper for PETLS](https://arxiv.org/abs/2508.11560)
* [AATRN YouTube Tutorial on Persistent Laplacians](https://www.youtube.com/watch?v=IBS4PQ8usFY)


## Khovanov Laplacian and Khovanov Dirac

Mathematica implementation of **Khovanov Laplacians** for **Khovanov homology** applied to knot theory. This extends combinatorial Laplacian theory to the geometric topology of knots and links.

* [GitHub Repository](https://github.com/bdjones13/KhovanovLaplacian/)
* [Publication](https://doi.org/10.1088/2632-072X/adde9f)

## Persistent Directed Flag Laplacian (PDFL)

**PDFL** combines **persistent topological Laplacians** with **directed flag complexes** (directed clique complexes) for **TDA** on directed networks. Built on the Flagser library for fast persistent homology of directed flag complexes.

* [GitHub Repository](https://github.com/bdjones13/flagser-laplacian/)
* [Publication](https://doi.org/10.3934/fods.2024048)