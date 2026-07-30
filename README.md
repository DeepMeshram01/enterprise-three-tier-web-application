# 🚀 Enterprise Three-Tier Web Application Deployment on AWS using Jenkins CI/CD, Docker & Amazon EKS

<div align="center">

![AWS](https://img.shields.io/badge/AWS-Cloud-orange?style=for-the-badge&logo=amazonaws)
![Docker](https://img.shields.io/badge/Docker-Container-blue?style=for-the-badge&logo=docker)
![Kubernetes](https://img.shields.io/badge/Kubernetes-EKS-326CE5?style=for-the-badge&logo=kubernetes)
![Jenkins](https://img.shields.io/badge/Jenkins-CI/CD-red?style=for-the-badge&logo=jenkins)
![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)
![CloudFront](https://img.shields.io/badge/Amazon-CloudFront-8C4FFF?style=for-the-badge&logo=amazonaws)
![Route53](https://img.shields.io/badge/Amazon-Route53-green?style=for-the-badge&logo=amazonaws)

</div>

---

<img width="1536" height="1024" alt="ChatGPT Image Jul 31, 2026, 01_19_58 AM" src="https://github.com/user-attachments/assets/14ea8caf-7c57-469d-9e82-0de7dbc4c5ec" />


<img width="1536" height="1024" alt="ChatGPT Image Jul 31, 2026, 01_15_23 AM" src="https://github.com/user-attachments/assets/50c5e87b-9e20-4993-a964-56e2383f4662" />



## 📖 Project Overview

This project demonstrates the complete deployment of an **Enterprise Three-Tier Web Application** on **Amazon Web Services (AWS)** using modern **DevOps practices**.

The application follows a production-style architecture consisting of a **React Frontend**, **Node.js & Express Backend**, and **MySQL Database**. The complete deployment pipeline is fully automated using **Jenkins CI/CD**, while **Docker** is used for containerization and **Amazon Elastic Kubernetes Service (Amazon EKS)** manages the Kubernetes cluster.

To improve scalability, performance, and security, the application is integrated with **Amazon CloudFront**, **AWS Certificate Manager (ACM)**, **Route 53**, and a **custom domain**, providing secure HTTPS access and global content delivery.

This project demonstrates an end-to-end cloud-native deployment workflow similar to what is implemented in real-world enterprise environments.

---

# 🏗️ Solution Architecture

```

```
                 +---------------------+
                 |      GitHub         |
                 +----------+----------+
                            |
                            |
                            ▼
                 +---------------------+
                 |      Jenkins        |
                 |   CI/CD Pipeline    |
                 +----------+----------+
                            |
             Build Docker Images
                            |
                            ▼
                 +---------------------+
                 |     Docker Hub      |
                 +----------+----------+
                            |
                            ▼
                 +---------------------+
                 |   Amazon EKS        |
                 | Kubernetes Cluster  |
                 +----------+----------+
                            |
        +-------------------+-------------------+
        |                                       |
        ▼                                       ▼
+------------------+                  +------------------+
|  React Frontend  |                  | Node.js Backend  |
+------------------+                  +------------------+
                                             |
                                             ▼
                                      +---------------+
                                      |    MySQL      |
                                      +---------------+

                            |
                            ▼
                Network Load Balancer (NLB)
                            |
                            ▼
                     Amazon CloudFront
                            |
                            ▼
                 Route53 + ACM Certificate
                            |
                            ▼
                     End Users (HTTPS)

```

---

## 🎯 Project Objectives

- Build a production-style three-tier web application.
- Implement Infrastructure on AWS.
- Containerize applications using Docker.
- Automate CI/CD using Jenkins.
- Deploy workloads on Amazon EKS.
- Manage application deployment using Kubernetes.
- Configure secure networking using VPC and Security Groups.
- Deliver the application globally using CloudFront.
- Configure HTTPS using AWS Certificate Manager.
- Connect a custom domain using Route 53.
- Gain practical hands-on experience with real-world DevOps tools and AWS services.

---

## ⭐ Key Features

- ✅ Enterprise Three-Tier Architecture
- ✅ Docker Containerization
- ✅ Jenkins CI/CD Pipeline
- ✅ Amazon Elastic Kubernetes Service (EKS)
- ✅ Kubernetes Deployments & Services
- ✅ MySQL Database
- ✅ Docker Hub Integration
- ✅ Network Load Balancer
- ✅ Amazon CloudFront
- ✅ AWS Certificate Manager (HTTPS)
- ✅ Route 53 Custom Domain
- ✅ Highly Scalable Architecture
- ✅ Cloud-Native Deployment
- ✅ Infrastructure Designed Following AWS Best Practices

---

## 🌍 Live Application

| Component | URL |
|-----------|-----|
| Application | https://deepmeshram.online |
| CloudFront | https://d7up8n8k0vjnf.cloudfront.net |
| GitHub Repository | https://github.com/DeepMeshram01/enterprise-three-tier-web-application |

---

---

# 🛠️ Technology Stack

| Category | Technologies |
|----------|--------------|
| **Cloud Platform** | Amazon Web Services (AWS) |
| **Operating System** | Amazon Linux 2023 |
| **Frontend** | React.js |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL |
| **Containerization** | Docker |
| **Container Registry** | Docker Hub |
| **Version Control** | Git & GitHub |
| **CI/CD** | Jenkins |
| **Container Orchestration** | Kubernetes |
| **Managed Kubernetes** | Amazon Elastic Kubernetes Service (Amazon EKS) |
| **Load Balancer** | AWS Network Load Balancer (NLB) |
| **Content Delivery Network** | Amazon CloudFront |
| **DNS Management** | Amazon Route 53 |
| **SSL Certificate** | AWS Certificate Manager (ACM) |

---

# ☁️ AWS Services Used

| AWS Service | Purpose |
|-------------|---------|
| **Amazon VPC** | Created an isolated and secure virtual network for the application. |
| **Public Subnets** | Hosted internet-facing resources such as Network Load Balancers and NAT Gateway. |
| **Private Application Subnets** | Hosted Amazon EKS worker nodes running frontend and backend applications. |
| **Private Database Subnets** | Reserved for database workloads following network isolation best practices. |
| **Internet Gateway** | Allowed internet access for public resources. |
| **NAT Gateway** | Enabled private subnets to securely access the internet without exposing them publicly. |
| **Route Tables** | Managed network routing between public and private subnets. |
| **Security Groups** | Controlled inbound and outbound traffic for EC2 instances, EKS nodes, and Load Balancers. |
| **IAM** | Managed authentication and authorization for AWS resources. |
| **Amazon EC2** | Hosted the Jenkins CI/CD server. |
| **Amazon EKS** | Managed Kubernetes cluster for deploying the application. |
| **Elastic Network Interfaces (ENI)** | Enabled networking between Kubernetes Pods and AWS resources. |
| **Amazon ECR / Docker Hub** | Docker Hub used to store application container images. |
| **Network Load Balancer (NLB)** | Exposed Kubernetes services to the internet. |
| **Amazon CloudFront** | Improved application performance by caching and delivering content globally. |
| **AWS Certificate Manager (ACM)** | Provided SSL/TLS certificates for secure HTTPS communication. |
| **Amazon Route 53** | Managed DNS records for the custom domain. |

---

# 📂 Repository Structure

```text
enterprise-three-tier-web-application/
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── ...
│
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   ├── src/
│   └── ...
│
├── kubernetes/
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── mysql-deployment.yaml
│   ├── mysql-service.yaml
│   └── ...
│
├── Jenkinsfile
├── README.md
└── LICENSE
```

---

# 🔄 CI/CD Workflow

```
Developer
     │
     ▼
GitHub Repository
     │
     ▼
Jenkins Pipeline
     │
     ▼
Build Docker Images
     │
     ▼
Push Images to Docker Hub
     │
     ▼
Deploy Updated Images to Amazon EKS
     │
     ▼
Kubernetes Rolling Update
     │
     ▼
Network Load Balancer
     │
     ▼
Amazon CloudFront
     │
     ▼
Route53 Custom Domain
     │
     ▼
Users
```

---

# 🌐 Application Request Flow

```
User
 │
 ▼
https://deepmeshram.online
 │
 ▼
Amazon Route53
 │
 ▼
Amazon CloudFront
 │
 ▼
Network Load Balancer
 │
 ▼
Frontend Pod (React)
 │
 ▼
Backend Service
 │
 ▼
Backend Pod (Node.js)
 │
 ▼
MySQL Database
```

---

---

# 🚀 Deployment Workflow

The project follows a complete DevOps lifecycle from source code management to production deployment.

## Step 1: Source Code Management

- Application source code is maintained in a GitHub repository.
- Separate directories are used for the frontend, backend, and Kubernetes manifests.
- Every code change is committed and pushed to GitHub.

⬇

## Step 2: Continuous Integration (CI)

Jenkins continuously monitors the GitHub repository.

Whenever new code is pushed:

- Jenkins automatically triggers the pipeline.
- Source code is cloned.
- Docker images are built.
- Build validation is performed.

⬇

## Step 3: Containerization

Both applications are containerized using Docker.

Containers created:

- Frontend (React)
- Backend (Node.js + Express)

Each image is tagged with a version before deployment.

⬇

## Step 4: Docker Hub

After successful image creation:

- Images are pushed to Docker Hub.
- Kubernetes always pulls the latest application image from Docker Hub.

⬇

## Step 5: Kubernetes Deployment

Amazon EKS manages the Kubernetes cluster.

Kubernetes resources used:

- Deployments
- Services
- ReplicaSets
- Pods

Deployments automatically maintain the desired number of running application instances.

⬇

## Step 6: Database Deployment

MySQL is deployed inside Kubernetes.

The backend communicates with MySQL through an internal Kubernetes ClusterIP Service.

⬇

## Step 7: Network Load Balancer

Frontend and Backend services are exposed using AWS Network Load Balancers.

The Load Balancers distribute incoming traffic across Kubernetes worker nodes.

⬇

## Step 8: CloudFront

Amazon CloudFront is configured in front of the frontend Network Load Balancer.

Benefits:

- Low latency
- Global caching
- Better performance
- HTTPS support

⬇

## Step 9: Route53 + ACM

A custom domain is configured using Route53.

AWS Certificate Manager provides an SSL certificate, allowing secure HTTPS access to the application.

---

# ⚙ Jenkins CI/CD Pipeline

The Jenkins pipeline performs the following automated steps:

### Stage 1

Checkout Source Code

- Clone GitHub repository

---

### Stage 2

Build Backend Image

```
docker build
```

---

### Stage 3

Build Frontend Image

```
docker build
```

---

### Stage 4

Push Images

```
docker push
```

Docker images are uploaded to Docker Hub.

---

### Stage 5

Deploy to Amazon EKS

```
kubectl apply -f
```

Kubernetes updates the running application.

---

### Stage 6

Rolling Update

Kubernetes performs rolling updates without downtime.

Old Pods are gradually replaced by new Pods.

---

# ☸ Kubernetes Resources Used

| Resource | Purpose |
|----------|---------|
| Namespace | Isolates project resources |
| Deployment | Manages application Pods |
| ReplicaSet | Maintains desired number of Pods |
| Pod | Runs application containers |
| Service | Provides stable networking |
| ClusterIP | Internal communication |
| LoadBalancer | Internet access to application |
| Configurations | Environment variables |
| Labels & Selectors | Connect Services with Pods |

---

# 🔐 Security Implementation

The infrastructure follows AWS security best practices.

### Networking

- Custom Amazon VPC
- Public and Private Subnets
- Private Application Tier
- Private Database Tier

---

### Access Control

- IAM Roles
- Security Groups
- Least Privilege Principle

---

### Traffic Management

- Internet Gateway
- NAT Gateway
- Route Tables

---

### Secure Communication

- HTTPS using ACM
- CloudFront SSL Termination

---

### Kubernetes Security

- Namespace Isolation
- Internal ClusterIP Services
- Separate frontend and backend Services

---

---

# 🐞 Challenges Faced & Solutions

During the implementation of this project, several real-world challenges were encountered. Each issue was investigated, diagnosed, and resolved to achieve a successful deployment.

| Challenge | Solution |
|-----------|----------|
| Frontend Pod remained in **Pending** state | Identified that the worker nodes had reached the maximum pod capacity. Increased the node group's desired capacity to allow additional pods to be scheduled. |
| Frontend Service had no Endpoints | Verified pod labels and service selectors. Once the frontend pod was running successfully, the service automatically discovered the pod endpoint. |
| Network Load Balancers were created as **Internal** | Updated the Kubernetes Service annotations by adding `service.beta.kubernetes.io/aws-load-balancer-scheme: internet-facing`, then recreated the LoadBalancer services. |
| Application was not accessible through the Load Balancer | Verified Kubernetes Services, Endpoints, Target Groups, and Security Groups to ensure traffic could reach the application pods. |
| CloudFront returned **504 Gateway Timeout** | Confirmed the frontend NLB was internet-facing and healthy. Updated the CloudFront origin configuration and waited for distribution deployment to complete. |
| Jenkins Pipeline failed during image push | Corrected Docker Hub credentials and repository configuration in Jenkins. |
| Kubernetes deployment updates were not reflected | Restarted deployments using `kubectl rollout restart` and verified the new pods were running successfully. |

---

# 📸 Project Screenshots

Add screenshots for the following stages of the project:

## AWS Infrastructure

- Custom VPC
- Public & Private Subnets
- Route Tables
- Internet Gateway
- NAT Gateway
- Security Groups

---

## Amazon EKS

- EKS Cluster
- Managed Node Group
- Worker Nodes

---

## Jenkins

- Jenkins Dashboard
- Jenkins Pipeline
- Successful Build History
- Pipeline Console Output

---

## Docker

- Docker Images
- Docker Hub Repository

---

## Kubernetes

- Deployments
- Pods
- Services
- Load Balancers
- Rolling Update

---

## Application

- Home Page
- Products Page
- Database Connectivity
- Working Application

---

## CloudFront

- CloudFront Distribution
- Distribution Status
- Domain Name

---

## Route 53

- Hosted Zone
- Alias Record

---

## HTTPS

- ACM Certificate
- Secure Website using HTTPS

---

# 📈 Future Enhancements

The following improvements can be implemented in future versions:

- Deploy MySQL using Amazon RDS
- Implement Horizontal Pod Autoscaler (HPA)
- Configure Cluster Autoscaler
- Add Prometheus and Grafana for monitoring
- Centralize logs using Amazon CloudWatch
- Integrate SonarQube for code quality analysis
- Add automated security scanning to the CI/CD pipeline
- Implement GitOps using ArgoCD or FluxCD
- Use Terraform to provision the complete AWS infrastructure

---

# 👨‍💻 Author

## Deep Meshram

**Cloud & DevOps Engineer**

- 🎓 B.Tech in Electronics & Telecommunication Engineering (2025)
- ☁ Passionate about AWS Cloud & DevOps
- 🐳 Skilled in Docker, Kubernetes, Jenkins, Git, Linux, and AWS Services

### Connect with Me

- **GitHub:** https://github.com/DeepMeshram01
- **LinkedIn:** *(Add your LinkedIn profile URL here)*

---

# ⭐ If you found this project useful

If you like this project, consider giving it a ⭐ on GitHub.

Your support motivates me to build more cloud and DevOps projects.

---

# 📄 License

This project is licensed under the MIT License.

See the LICENSE file for more information.

---
