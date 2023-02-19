data "terraform_remote_state" "backend_state" {
  backend = "oss"

  config = {
    bucket = "tf_tutorial_remote_state_bucket"
    key    = "dev/applications/backend-app/terraform.tfstate"
    region = "cn-shanghai"
  }
}

locals {
  backend_port = data.terraform_remote_state.backend_state.outputs.port
}
