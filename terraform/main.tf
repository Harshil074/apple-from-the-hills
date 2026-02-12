resource "random_id" "suffix" {
  byte_length = 4
}

resource "aws_s3_bucket" "terraform_test" {
  bucket = "${var.project_name}-${var.environment}-${random_id.suffix.hex}"

  tags = {
    Name        = var.project_name
    Environment = var.environment
    ManagedBy  = "Terraform"
  }
}

resource "aws_s3_bucket_versioning" "versioning" {
  bucket = aws_s3_bucket.terraform_test.id

  versioning_configuration {
    status = "Enabled"
  }
}
