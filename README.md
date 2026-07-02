# 🚀 Enterprise Three-Tier Web Application Deployment on Amazon EKS Using Jenkins CI/CD

### Automating the deployment of a containerized three-tier application using GitHub, Jenkins, Docker, Docker Hub, Kubernetes, and Amazon EKS.

This project demonstrates the complete DevOps lifecycle of deploying a production-style three-tier web application on Amazon Elastic Kubernetes Service (Amazon EKS). It showcases modern DevOps practices including Continuous Integration, Continuous Delivery (CI/CD), Docker containerization, Kubernetes orchestration, and cloud infrastructure deployment on AWS.

<img width="1536" height="1024" alt="project2" src="https://github.com/user-attachments/assets/29a75bfd-5e5c-4c57-85ee-0f4e12f5c0b3" />


![AWS](https://img.shields.io/badge/AWS-Cloud-orange?style=for-the-badge\&logo=amazonaws)
![Amazon EKS](https://img.shields.io/badge/Amazon_EKS-Kubernetes-blue?style=for-the-badge\&logo=amazon-eks)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?style=for-the-badge\&logo=kubernetes\&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerization-2496ED?style=for-the-badge\&logo=docker\&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=for-the-badge\&logo=jenkins\&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Source_Control-181717?style=for-the-badge\&logo=github)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge\&logo=express)
![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge\&logo=mysql\&logoColor=white)
![Docker Hub](https://img.shields.io/badge/Docker_Hub-Registry-2496ED?style=for-the-badge\&logo=docker)
![Git](https://img.shields.io/badge/Git-Version_Control-F05032?style=for-the-badge\&logo=git\&logoColor=white)

| **Category**                | **Details**                                     |
| --------------------------- | ----------------------------------------------- |
| **Project Type**            | Enterprise Three-Tier Web Application           |
| **Cloud Platform**          | Amazon Web Services (AWS)                       |
| **Container Platform**      | Docker                                          |
| **Container Orchestration** | Kubernetes (Amazon EKS)                         |
| **CI/CD Tool**              | Jenkins                                         |
| **Source Code Management**  | Git & GitHub                                    |
| **Container Registry**      | Docker Hub                                      |
| **Frontend**                | React.js                                        |
| **Backend**                 | Node.js & Express.js                            |
| **Database**                | MySQL                                           |
| **Architecture**            | Three-Tier Architecture                         |
| **Deployment Model**        | Automated CI/CD Pipeline                        |
| **Infrastructure**          | Custom Amazon VPC with IAM Roles and Amazon EKS |

## 📑 Table of Contents

* [📌 About the Project](#-about-the-project)
* [🎯 Project Objectives](#-project-objectives)
* [✨ Key Features](#-key-features)
* [🏗️ Solution Architecture](#️-solution-architecture)
* [🛠️ Technology Stack](#️-technology-stack)
* [☁️ AWS Services Used](#️-aws-services-used)
* [⚙️ CI/CD Pipeline Workflow](#️-cicd-pipeline-workflow)
* [📂 Repository Structure](#-repository-structure)
* [🚀 Deployment Guide](#-deployment-guide)
* [✅ Verification](#-verification)
* [📚 Learning Outcomes](#-learning-outcomes)
* [🔮 Future Enhancements](#-future-enhancements)
* [👨‍💻 Author](#-author)

## 📌 About the Project

Modern enterprise applications require an automated, scalable, and reliable deployment process. This project demonstrates how a complete three-tier web application can be containerized, integrated into a Continuous Integration and Continuous Delivery (CI/CD) pipeline, and deployed to a managed Kubernetes environment on AWS.

The application is built using a React frontend, a Node.js and Express backend, and a MySQL database. Each tier is packaged as a Docker container and deployed on Amazon Elastic Kubernetes Service (Amazon EKS), enabling high availability, portability, and simplified application management.

A Jenkins pipeline automates the entire software delivery process—from retrieving source code from GitHub, building Docker images, publishing them to Docker Hub, and deploying the latest application version to Amazon EKS. This automation reduces manual effort, improves deployment consistency, and reflects modern DevOps practices used in production environments.

This repository represents a complete end-to-end DevOps implementation, combining cloud infrastructure, containerization, Kubernetes orchestration, and CI/CD automation into a single enterprise-style deployment workflow.

## 🎯 Project Objectives

The primary objective of this project is to design, containerize, automate, and deploy an enterprise-grade three-tier web application using modern DevOps practices on Amazon Web Services (AWS).

This project was developed to gain practical, hands-on experience with cloud infrastructure, containerization, Kubernetes orchestration, and Continuous Integration/Continuous Delivery (CI/CD). It demonstrates how different DevOps tools and AWS services work together to automate the complete application deployment lifecycle.

### Objectives

* Design and implement a production-style three-tier application architecture.
* Containerize the frontend and backend applications using Docker.
* Store and manage container images in Docker Hub.
* Deploy containerized workloads on Amazon Elastic Kubernetes Service (Amazon EKS).
* Automate build, image creation, and deployment using Jenkins CI/CD.
* Manage Kubernetes resources using declarative YAML manifests.
* Demonstrate infrastructure, automation, and deployment skills aligned with real-world DevOps workflows.

## ✨ Key Features

* 🚀 Enterprise-grade three-tier architecture (Frontend, Backend, and Database).
* ☁️ Deployment on Amazon Elastic Kubernetes Service (Amazon EKS).
* 🔄 Fully automated Jenkins CI/CD pipeline.
* 🐳 Docker-based containerization for frontend and backend services.
* 📦 Docker Hub integration for centralized image management.
* ☸️ Kubernetes Deployments and Services for application orchestration.
* 🗄️ MySQL database deployed within the Kubernetes cluster.
* 🌐 React-based responsive frontend application.
* ⚙️ RESTful backend API developed using Node.js and Express.js.
* 🔒 IAM Role-based authentication for secure AWS access.
* 📁 Source code version control using Git and GitHub.
* 📈 End-to-end automated deployment from code commit to Kubernetes.

## 🏗️ Solution Architecture

The project follows a modern enterprise three-tier architecture that separates the application into independent layers to improve scalability, maintainability, and deployment flexibility.

### Architecture Overview

* **Presentation Layer (Frontend):**

  * Built using React.js.
  * Provides the user interface for interacting with the application.
  * Packaged as a Docker container and deployed on Amazon EKS.

* **Application Layer (Backend):**

  * Developed using Node.js and Express.js.
  * Exposes RESTful APIs that process client requests and communicate with the database.
  * Runs as an independent Docker container managed by Kubernetes.

* **Data Layer (Database):**

  * Uses MySQL for persistent data storage.
  * Deployed as a Kubernetes workload inside the Amazon EKS cluster.
  * Accessible only by the backend service, ensuring proper separation of responsibilities.

The complete application is deployed on Amazon Elastic Kubernetes Service (Amazon EKS), where Kubernetes manages container scheduling, networking, service discovery, and application availability.

## 🛠️ Technology Stack

| Category                     | Technology                 |
| ---------------------------- | -------------------------- |
| **Cloud Platform**           | Amazon Web Services (AWS)  |
| **Container Orchestration**  | Amazon EKS, Kubernetes     |
| **CI/CD**                    | Jenkins                    |
| **Containerization**         | Docker                     |
| **Container Registry**       | Docker Hub                 |
| **Frontend**                 | React.js                   |
| **Backend**                  | Node.js, Express.js        |
| **Database**                 | MySQL                      |
| **Version Control**          | Git, GitHub                |
| **Infrastructure**           | Amazon VPC, IAM Roles, EC2 |
| **Deployment Configuration** | Kubernetes YAML Manifests  |

## ☁️ AWS Services Used

| AWS Service                             | Purpose                                                                        |
| --------------------------------------- | ------------------------------------------------------------------------------ |
| **Amazon VPC**                          | Provides an isolated virtual network for the application infrastructure.       |
| **Amazon EC2**                          | Hosts the Jenkins server used for CI/CD automation.                            |
| **Amazon EKS**                          | Manages the Kubernetes cluster that runs the application workloads.            |
| **IAM**                                 | Provides secure role-based access between AWS services and the Jenkins server. |
| **Security Groups**                     | Control inbound and outbound network traffic for the infrastructure.           |
| **Elastic Load Balancer (EKS Service)** | Exposes the frontend application to users.                                     |

## ⚙️ CI/CD Pipeline Workflow

The project implements a fully automated Continuous Integration and Continuous Delivery (CI/CD) pipeline using Jenkins. Every stage of the deployment process is automated, reducing manual intervention and ensuring consistent application deployments.

### Pipeline Workflow

```text
Developer
    │
    ▼
Push Source Code to GitHub
    │
    ▼
Jenkins Pipeline Trigger
    │
    ▼
Checkout Source Code
    │
    ▼
Build Backend Docker Image
    │
    ▼
Build Frontend Docker Image
    │
    ▼
Authenticate with Docker Hub
    │
    ▼
Push Docker Images to Docker Hub
    │
    ▼
Deploy Updated Images to Amazon EKS
    │
    ▼
Verify Kubernetes Rollout
    │
    ▼
Application Available to End Users
```

### Pipeline Stages

1. Retrieve the latest source code from the GitHub repository.
2. Build Docker images for the frontend and backend applications.
3. Authenticate securely with Docker Hub.
4. Push the newly built Docker images to Docker Hub.
5. Deploy the latest container images to Amazon EKS using Kubernetes manifests.
6. Verify the deployment rollout to ensure all Kubernetes resources are running successfully.

## 📂 Repository Structure

```text
enterprise-three-tier-web-application/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── database/
│   ├── routes/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── jenkins/
│   └── Jenkinsfile
│
├── kubernetes/
│   ├── namespace.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── mysql-deployment.yaml
│   └── mysql-service.yaml
│
├── README.md
└── .gitignore
```

### Directory Description

| Directory       | Description                                                       |
| --------------- | ----------------------------------------------------------------- |
| **backend/**    | Node.js and Express.js REST API with MySQL connectivity.          |
| **frontend/**   | React.js client application.                                      |
| **jenkins/**    | Jenkins Pipeline definition for CI/CD automation.                 |
| **kubernetes/** | Kubernetes manifests for deploying the application on Amazon EKS. |
| **README.md**   | Project documentation and deployment guide.                       |

## 🚀 Deployment Guide

The project follows an automated deployment workflow using Jenkins, Docker, Docker Hub, Kubernetes, and Amazon EKS.

### Deployment Workflow

1. Clone the project repository from GitHub.
2. Configure Jenkins credentials for GitHub, Docker Hub, and AWS.
3. Execute the Jenkins pipeline.
4. Build Docker images for the frontend and backend applications.
5. Push the Docker images to Docker Hub.
6. Deploy the application to Amazon Elastic Kubernetes Service (Amazon EKS).
7. Verify the deployment by checking Kubernetes resources and accessing the application through the Kubernetes LoadBalancer service.

The entire deployment process is automated through the Jenkins pipeline, eliminating manual build and deployment steps.

## ✅ Verification

The deployment was validated using the following checks:

| Verification                    | Purpose                                                                          |
| ------------------------------- | -------------------------------------------------------------------------------- |
| `kubectl get nodes`             | Verify Amazon EKS worker nodes are in the **Ready** state.                       |
| `kubectl get pods -n cloudcart` | Confirm frontend, backend, and MySQL pods are running successfully.              |
| `kubectl get svc -n cloudcart`  | Verify Kubernetes services and external LoadBalancer configuration.              |
| Jenkins Pipeline                | Confirm successful execution of all CI/CD stages.                                |
| Docker Hub                      | Verify the latest backend and frontend images were pushed successfully.          |
| Web Application                 | Confirm the frontend is accessible through the Kubernetes LoadBalancer endpoint. |
| Backend API                     | Validate API responses from the backend service.                                 |

## 📚 Learning Outcomes

This project provided practical experience with modern DevOps tools and cloud-native deployment practices, including:

* Designing and implementing an enterprise three-tier application architecture.
* Containerizing applications using Docker.
* Building automated CI/CD pipelines with Jenkins.
* Managing container images using Docker Hub.
* Deploying workloads to Amazon Elastic Kubernetes Service (Amazon EKS).
* Creating and managing Kubernetes Deployments and Services.
* Configuring AWS networking and IAM for secure infrastructure access.
* Troubleshooting deployment, networking, authentication, and application issues in a cloud environment.
* Integrating multiple DevOps tools into a complete end-to-end deployment workflow.

## 🔮 Future Enhancements

The current implementation provides a fully functional CI/CD pipeline and Kubernetes-based deployment. The following enhancements can further improve the project and align it with production-grade DevOps practices:

* Implement HTTPS using AWS Certificate Manager and an AWS Application Load Balancer.
* Integrate Amazon ECR as an alternative private container registry.
* Add Kubernetes Ingress for advanced traffic routing.
* Implement Horizontal Pod Autoscaler (HPA) for automatic scaling based on resource utilization.
* Introduce monitoring and observability using Prometheus and Grafana.
* Centralize application logging using the ELK Stack (Elasticsearch, Logstash, and Kibana).
* Manage sensitive configuration using Kubernetes Secrets and AWS Secrets Manager.
* Implement GitOps-based deployments using Argo CD.
* Automate infrastructure provisioning using Terraform.
* Add automated testing and security scanning within the Jenkins pipeline.

## 👨‍💻 Author

**Deep Meshram**

Cloud & DevOps Engineer | AWS | Docker | Kubernetes | Jenkins | CI/CD

If you found this project useful or have any suggestions for improvement, feel free to connect or raise an issue in this repository.

---

⭐ If you like this project, consider giving it a star to support the repository.
