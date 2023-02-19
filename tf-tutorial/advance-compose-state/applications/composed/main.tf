module "frontend" {
  source = "../frontend-app"

  var1 = var.input_1
  var2 = var.input_2
  port = module.backend.port
}

module "backend" {
  source = "../backend-app"

  var1 = var.input_3
  var2 = var.input_4
}
