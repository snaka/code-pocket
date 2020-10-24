# どのプロバイダを利用するかを Terraform に知らせる
#   registry: https://registry.terraform.io/
terraform {
  backend "remote" {
    organization = "snaka"
    workspaces {
      name = "Example-Workspace"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 2.70"
    }
  }
}

# プロバイダの設定
provider "aws" {
  # AWS CLI の profile 設定のうちどれを使うかを指定
  profile = "default"
  region  = "us-west-2"
}

# リソースのタイプと名前
# タイプはプレフィクスとしてプロバイダが含まれる
#   ex. aws - provider, instance - type
resource "aws_instance" "example" {
  # AMI ID はリージョン固有なので region を変更する際は変更する必要あり
  ami           = "ami-08d70e59c07c61a3a"
  instance_type = "t2.micro"
}

resource "aws_eip" "ip" {
  vpc      = true
  instance = aws_instance.example.id
}

output "ip" {
  value = aws_eip.ip.public_ip
}
