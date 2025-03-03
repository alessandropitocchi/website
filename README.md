# I Just Deployed My First Website on AWS with CI/CD! 

Over the past few days, I’ve been working on a project to host a static website on AWS, manage it with Terraform, and fully automate deployments with GitHub Actions. My goal? Learn, challenge myself, and get hands-on experience with Cloud and DevOps.

## 🔹 How I Structured the Project 
I wanted to approach this like a real DevOps project, so I divided it into phases to gradually reach the final solution.

### Phase 1: Setting Up the Repository and Website
✅ Created a GitHub repository to manage the code <br />
✅ Built a basic website using HTML, CSS, and JavaScript <br />
✅ Registered the domain alessandropitocchi.it and decided to host it on AWS S3

🔹 Goal: Have a clean repository and a ready-to-use domain.

### Phase 2: Configuring Infrastructure with Terraform
✅ Wrote the initial Terraform scripts to create S3, CloudFront, and Route 53 <br />
✅ Set up an SSL certificate with AWS Certificate Manager (ACM) <br />
✅ Tested the deployment and fixed several syntax and configuration errors

🔹 Biggest issue: Validating the SSL certificate via DNS. I had to dig deep into how CNAME records work in Route 53 to successfully validate the certificate with Terraform.

### Phase 3: Manually Uploading Files to Test Everything
✅ After configuring the infrastructure with Terraform, I manually uploaded the website files to the S3 bucket <br />
✅ Tested the website by accessing the domain <br />
✅ Found out that CloudFront was still serving the old files… Cache issues!

🔹 Solution: Manually invalidate the CloudFront cache to ensure updated files were being served.

### Phase 4: Setting Up CI/CD with GitHub Actions
✅ Created a GitHub Actions pipeline that:

Runs linters to check HTML, CSS, and JavaScript quality
Uploads files to S3 automatically
Invalidates CloudFront cache to instantly reflect changes <br />
✅ Now, every time I push to GitHub, the website updates automatically! 

🔹 Main challenge: Understanding how to properly configure GitHub Actions with AWS and set up the IAM permissions and secrets correctly.

## 🔹 Biggest Challenges 
### SSL Certificate & Terraform
Terraform requires SSL certificates to be validated via Route 53. I ran into several configuration issues and had to wait for DNS propagation before everything worked.

### CloudFront Caching Issues
Even after updating files in S3, CloudFront was still serving old versions. I realized I needed to manually invalidate the cache to reflect changes immediately.

### Automating Deployments with GitHub Actions
It wasn't just "copy files"; I had to manage AWS IAM, permissions, and secrets. My first attempt at automating deployments... completely failed.  After some debugging, it now works smoothly!

### Domain Not Reaching the S3 Bucket Due to IPv6
At first, my domain couldn't reach the bucket because Route 53 AAAA (IPv6) records were causing issues with CloudFront.
🔹 Solution: I had to remove the AAAA records and keep only the A (IPv4) records in Route 53 to make the domain resolution work correctly!

## 🔹 Why Did I Do This?
To learn! I know this isn't a perfect setup, and there are definitely optimizations I could make. Any feedback, criticism, or advice is more than welcome! 

If you have suggestions on how to improve this setup, avoid common pitfalls, or make the pipeline more efficient, I’m all ears! 

#AWS #Terraform #Cloud #DevOps #GitHubActions #LearningByDoing 








