output "s3_bucket_name" {
  description = "Created S3 bucket name"
  value       = aws_s3_bucket.terraform_test.bucket
}

output "aws_region" {
  value = var.aws_region
}
