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

## How to deploy

Use k3s to deploy those pages, with external-dns, cert-manager

- containerize pages
  - create docker file to dockerize those pages
  - create github actions to build and push docker image
    - github profile - just commit to that repo
  - create k8s manifest to deploy those pages
- install k3s
- configure external-dns and cert-manager(lets encrypt)
  - create RAM user and AKSK in alicloud

### steps

- install k3s
  - setup server `ubuntu 22.04`
  - install k3s, see [install_k3s](./install_k3s)
  - expose k3s to internet, see [inbound rules](https://docs.k3s.io/zh/installation/requirements#inbound-rules-for-k3s-nodes)
  - export k3s kubeconfig, replace `127.0.0.1` with server ip
  - execute `k get no` in local
- install core components
  - helm
  - ~~ingress-nginx~~
    - use Traefik instead (built-in k3s)
  -
