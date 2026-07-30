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
