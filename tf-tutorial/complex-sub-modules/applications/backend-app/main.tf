module "server" {
  source = "../../modules/vm"

  cpu    = 2
  memory = 4096
  vpc_id = module.vpc.id
}

module "vpc" {
  source = "../../modules/vm/networking"

  type = "private"
  cdir = "172.0.0.1/16"
}

module "db" {
  source = "../../modules/database"

  # upgrade to v1
  # source = "../../modules/database/v1"

  # or publish module to registry
  # source = "private-regirstry@modules/database/v1"
}
