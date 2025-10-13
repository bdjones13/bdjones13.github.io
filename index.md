---
title: "Ben Jones"
layout: splash
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/purple-coffee.jpg
---

![image-left](/assets/images/ProfileF23.jpeg){: width="20%" .align-right } &nbsp;&nbsp;&nbsp;&nbsp;I am a math PhD candidate at [Michigan State University](https://math.natsci.msu.edu/) working with [Guo-Wei Wei](https://users.math.msu.edu/users/weig/) to develop tools in **Computational Topology** for computational biology.

I earned my M.A. in Mathematics, B.S. in Computer Science, and B.S. in Mathematics at The University of Alabama.

**I am currently on the job market for a postdoc starting Summer/Fall 2026.** Here is [my CV](/assets/files/CV.pdf).

# Research

## Overview
[**Persistent Topological Laplacians** (PTLs)](https://www.youtube.com/watch?v=SIHirU11jqI) **generalize [persistent homology](https://en.wikipedia.org/wiki/Persistent_homology)**, like the one in [this paper](https://users.math.msu.edu/users/weig/paper/p290.pdf) by [Rui Wang](https://wangru25.github.io/). They also **generalize the [graph Laplacian](https://en.wikipedia.org/wiki/Laplacian_matrix)** of spectral graph theory to higher-order simplicial complexes (and other structures, such as path complexes). The eigenvalues (spectra) of a PTL reveals persistent homology and geometric qualities of the complex. Computing the PTL and its eigenvalues is hard. 

As part of the Spring 2025 WinCompTop+AATRN Tutorial-a-thon, I made a <a href="https://youtu.be/IBS4PQ8usFY?si=X5im1nSkTEnixjJ3"><strong>YouTube tutorial</strong></a> that introduces Persistent Laplacians.

I wrote a fast python library to compute PTLs, called the <u>**PE**</u>rsistent <u>**T**</u>opological <u>**L**</u>aplacian <u>**S**</u>oftware (<u>**PETLS**</u>). Links to source code on [Github](https://github.com/bdjones13/PETLS/), the paper on [Arxiv](https://arxiv.org/abs/2508.11560), and the [API Documentation](https://www.benjones-math.com/software/PETLS/). You can install from PyPI via ```pip install petls```.

## I am currently interested in:

1. The behavior of persistent (and non-Persistent) topological Laplacians defined **in different contexts**, such as directed flag (clique) complexes<sup><a href="#pdfl">3</a></sup>, the chain complex arrising from Khovanov homology<sup><a href="#khovanov">5</a></sup>, and with cellular sheaves.
2. Ways to **efficiently compute** the persistent Laplacian and its eigenvalues. Persistent Laplacian computations are much slower in practice than persistent homology, but there are practical and theoretical ways to mitigate this<sup><a href="#petls">7</a></sup>. 
3. Applying persistent Laplacians and/or **machine learning** to problems in **molecular biology**<sup><a href="#pdfl-ml">4</a>, <a href="#transformer">6</a>, <a href="#alphafold">8</a>, <a href="#opioid">9</a> </sup>.
4. Applying persistent homology of **asymmetric/directed networks** (directed flag/clique complexes and Dowker complexes) to study dynamical systems arrising from **climate science**.


## Papers and preprints
<ol reversed>
  <li id="opioid"> Chunhuan Zhang, Sean Cottrell, <strong>Benjamin Jones</strong>, Yueying Zhu, Huahai Qiu, Bengong Zhang, Tianshou Zhou,  and Jian Jiang, "Meta-analysis and Topological Perturbation in Interactomic Network for Anti-opioid Addiction Drug Repurposing," 2025. (<a href="https://arxiv.org/abs/2509.19410">arXiv</a>)
  <li id="alphafold">Jian Jiang, Guilin Wang, Daixin Li, Nicole Hayes, <strong>Benjamin Jones</strong>, Yazhou Shi, Huahai Qiu, Bengong Zhang, Tianshou Zhou, and Guo-Wei Wei, "Unexpected Applications of AlphaFold in Molecular Sciences: A Review," <em>Annual review of Biochemistry</em>, accepted (2025).
  <li id="petls"><strong>Benjamin Jones</strong> and Guo-Wei Wei, "PETLS: PErsistent Topological Laplacian Software," 2025. (<a href="https://arxiv.org/abs/2508.11560">arXiv</a>)
  <li id="transformer">Dong Chen, Gengzhuo Liu, Hongyan Du, <strong>Benjamin Jones</strong>, Junjie Wee, Rui Wang, Jiahui Chen, Jana Shen, and Guo-Wei Wei, "Drug Resistance Predictions Based on a Directed Flag Transformer,"  <em>Advanced Science</em> e02756, 2025. (<a href="https://arxiv.org/abs/2403.02603">arXiv</a>) (<a href="https://doi.org/10.1002/advs.202502756">doi</a>)</li>
  <li id="khovanov"><strong>Benjamin Jones</strong> and Guo-Wei Wei, "Khovanov Laplacian and Khovanov Dirac for Knots and Links," <em>J. Phys. Complex.</em> 6(2), 025014, 2025. (<a href="https://arxiv.org/abs/2411.18841">arxiv</a>) (<a href="https://doi.org/10.1088/2632-072X/adde9f">doi</a>)</li>
  <li id="pdfl-ml">Mushal Zia, <strong>Benjamin Jones</strong>, Hongsong Feng, Guo-Wei Wei, "Persistent Directed Flag Laplacian (PDFL)-Based Machine Learning for Protein-Ligand Binding Affinity Prediction," <em>Journal of Chemical Theory and Computation</em> 21(8), 4276-4285, 2025. (<a href="https://arxiv.org/abs/2411.02596">arxiv</a>) (<a href="https://doi.org/10.1021/acs.jctc.5c00074">doi</a>) </li>
  <li id="pdfl"><strong>Benjamin Jones</strong> and Guo-Wei Wei, "Persistent Directed Flag Laplacian," <em>Foundations of Data Science,</em> 7(3), 737-758, 2025. (<a href="https://arxiv.org/abs/2312.02099">arxiv</a>) (<a href="https://doi.org/10.3934/fods.2024048">doi</a>)</li>
  <li>S. Ahmed Ullah, X. Yang, <strong>Ben Jones</strong>, S. Zhao, W. Geng, and G. Wei, "Bridging Eulerian and Lagrangian Poisson-Boltzmann solvers by ESES," <em>Journal of Computational Chemistry.</em> 2023, 1. (<a href="https://doi.org/10.1002/jcc.27239">doi</a>)</li>
  <li><strong>Benjamin Jones</strong>, S. Ahmed Ullah, S. Wang, and S. Zhao, "Adaptive pseudo-time methods for the Poisson-Boltzmann equation with Eulerian solvent excluded surface", <em>Communications in Information & Systems,</em> 21(1), 85-123, 2021. (<a href="arxiv.org/abs/2011.14250">arxiv</a>) (<a href="https://dx.doi.org/10.4310/CIS.2021.v21.n1.a5">doi</a>)</li>
</ol>

## Contributed Talks
<ol reversed>
    <li><a href="https://zhengchao-wan.com/tda-conference-2025/index.html">Conference on Topological Data Analysis: Recent Developments and Applications</a>, November 2025. </li>
    <li><a href="https://www.imsi.institute/activities/the-geometric-realization-of-aatrn-applied-algebraic-topology-research-network/">5th Workshop on Computational Persistence (ComPer)</a>, SUNY Albany. </li>
    <li><a href="https://sites.google.com/view/glsiam2025/">SIAM Great Lakes Section Annual Meeting,</a> Illinois Institute of Technology, September 2025.</li>
    <li>The Geometric Realization of the Applied Algebraic Topology Research Network (AATRN), IMSI, Chicago. Lightning talk + poster. August 2025.
    <li><a href="https://topologyandgeometry.iu.edu/gstgc25/index.html">Graduate Student Geometry and Topology Conference 2025</a>, Indiana University Bloomington. "Persistent and combinatorial Laplacians for topological data analysis and their introduction to knot theory," April 2025.</li>
    <li>Women in Computational Topology (WinCompTop) + Applied Algebraic Topology Research Network (AATRN) Spring 2025 Tutorial-a-thon, <a href="https://youtu.be/IBS4PQ8usFY?si=X5im1nSkTEnixjJ3">YouTube tutorial</a>. "Persistent Laplacians: What they are, why you should care, and how to compute them," February 2025.</li>
    <li>Joint Mathematics Meetings (JMM), Seattle, WA. AMS Special Session on Topological Data Analysis: Theory and Applications. "Efficient Computation of Persistent Laplacians," January 2025.</li>
    <li>Joint Mathematics Meetings (JMM), Seattle, WA. MRC Climate Science at the Interface Between Topological Data Analysis and Dynamical Systems Theory. "Dynamics-Aware Filtrations," January 2025.</li>
    <li>SIAM Conference on Mathematics of Data Science (MDS24), Atlanta, GA. Minisymposium on <a href="https://meetings.siam.org/sess/dsp_programsess.cfm?SESSIONCODE=80632">Exploring the Intersection of Topological and Geometric Data Analysis with Biological Applications.</a> "Persistent Directed Flag Laplacian," October 2024. </li>
    <li><a href="https://www.tugraz.at/projekte/cpw/home">4th Workshop on Computational Persistence (ComPer)</a>, Graz University of Technology (by zoom). "Efficient Computation of Persistent Laplacians," September 2024.</li>
    <li><a href="https://sites.google.com/view/mbw-2024/home?authuser=0">Mathematical Biosciences Workshop</a>, Penn State University. "Persistent Directed Flag Laplacian," August 2024.</li>
</ol>

## Seminar Talks
<ol reversed>
<li> MSU <a href="https://cmse.msu.edu/NewsEvents/tda_seminar/index.aspx">TDA Seminar</a>. "Computing Persistent Laplacians: Toward Broader Applications in TDA," April 2025.</li>
<li> MSU Student Geometry and Topology Seminar. "Combinatorial and Persistent Laplacians: from Graphs to TDA," October 2024.</li>
<li> MSU Operator Algebras Reading Seminar. "The story of how Vaughan Jones used operator algebras to spark a revolution in topology," March 2024. </li>
<li> University of Alabama Applied Math Seminar, Tuscaloosa, AL. "Adaptive Pseudo-Time Methods for the Poisson-Boltzmann Equation with Eulerian Solvent Excluded Surface," December 2020.</li>
</ol>

## Theses

**Ph.D. (in progress):** B. Jones. "Aspects of Applied Geometric and Algebraic Topologies." Doctoral thesis at Michigan State University.
  Committee: *Guo-Wei Wei (chair), Mark Iwen, Ekaterina Merkurjev, and Elizabeth Munch.*

**Master's:** B. Jones. "Adaptive pseudo-time methods for the Poisson-Boltzmann equation with Eulerian solvent excluded surface," (2021). Master's thesis at The University of Alabama.  
    Committee: *Shan Zhao (chair), Xiaoyan Hong, Mojdeh Rasoulzadeh, and Wei Zhu.*


# Contact information
[benjamindanieljones@gmail.com](mailto:benjamindanieljones@gmail.com)

[jones657@msu.edu](mailto:jones657@msu.edu)

