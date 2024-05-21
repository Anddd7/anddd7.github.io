# Anddd7

Central repository to manage my blog and personal pages.

## Pages

### docsify blog

Host and deploy blog with docsify

- `docs`

### github profile

Profile page of github

- `github/Anddd7`

### mesh-shaped

Home page of my domain

- `www.mesh-shaped.top`

## How to deploy (WIP)

Use k3s to deploy those pages, with external-dns, cert-manager

- containerize pages
  - create docker file to dockerize those pages
  - create github actions to build and push docker image
    - github profile - just commit to that repo
  - create k8s manifest to deploy those pages
- install k3s
- configure external-dns and cert-manager(lets encrypt)
  - create RAM user and AKSK in alicloud
