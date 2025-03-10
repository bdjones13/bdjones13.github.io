---
permalink: /research/
title: "Research"
toc: true
---
# Background info on Persistent Laplacians

<iframe width="560" height="315" src="https://www.youtube.com/embed/IBS4PQ8usFY?si=e7Um-xqXajTEqw5N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Projects

## Persistent Laplacian Library

I am working on a C++ library (with Python bindings) to efficiently compute many persistent Laplacian variations, unifying some disparate projects from multiple research groups in an efficient and user-friendly tool. 

With preliminary testing, an experiment with the PDFL (below) that took 1.5 hours on 1 core of MSU's High Performance Computing Cluster (HPCC) now takes about 12 seconds on 1 core of my laptop.

## A Persistent Topological Laplacian for Directed Flag Complexes

Paper on [arxiv](https://arxiv.org/abs/2312.02099), code on [GitHub](https://github.com/bdjones13/flagser-laplacian).

By combining persistent topological Laplacians with the directed flag complex (aka directed clique complex), we made the Persistent Directed Flag Laplacian (PDFL), which can glean information about the persistent homology and more. This builds on the fast persistent homology tool, Flagser, which was built similarly to Ripser: [Computing Persistent Homology of Directed Flag Complexes](https://doi.org/10.3390/a13010019) by Daniel Lütgehetmann et al., 2020.

Here is a picture of a small filtered complex using a triangle, its persistent Betti numbers $$\beta$$ and the least nonzero persistent Eigenvalues $$\lambda$$.


<figure class="half">
    <img src="/assets/images/filtered_triangle.png">
	<img src="/assets/images/filtered_triangle_spectra.png">
</figure>


## Adaptive pseudo-time methods for solving the Nonlinear Poisson-Boltzmann Equation

This project is the basis for [this paper](https://dx.doi.org/10.4310/CIS.2021.v21.n1.a5), Ullah et al., 2023, and my master's thesis. This work was completed with [Shan Zhao's](http://szhao.people.ua.edu/) research group at the [University of Alabama](http://www.math.ua.edu/). 

I used a Proportional Integral Derivative (PID) controller to adaptively choose the time step in the numerical solution of a nonlinear PDE, the Poisson-Boltzmann Equation. This saved 84% of CPU time with only 0.06% relative error in computing the solvation energy of proteins.