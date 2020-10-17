terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 2.70"
    }
  }
}

# リソースを提供する側
provider "aws" {
  profile = "default"
  region  = "us-west-2"
}

# リソースのタイプと名前
# タイプはプレフィクスとしてプロバイダが含まれる
resource "aws_instance" "example" {
  # AMI ID はリージョン固有なので region を変更する際は変更する必要あり
  ami           = "ami-830c94e3"
  instance_type = "t2.micro"
}
