pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "deepmeshram0149/enterprise-backend:v2"
        FRONTEND_IMAGE = "deepmeshram0149/enterprise-frontend:v3"
    }

    stages {

        stage('Checkout Source Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend Image') {
            steps {
                dir('backend') {
                    sh 'docker build -t $BACKEND_IMAGE .'
                }
            }
        }

        stage('Push Backend Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    docker push $BACKEND_IMAGE
                    docker logout
                    '''
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('frontend') {
                    sh 'docker build -t $FRONTEND_IMAGE .'
                }
            }
        }

        stage('Push Frontend Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    docker push $FRONTEND_IMAGE
                    docker logout
                    '''
                }
            }
        }

        stage('Deploy to Amazon EKS') {
            steps {
                sh '''
                kubectl set image deployment/backend \
                backend=$BACKEND_IMAGE \
                -n enterprise-app

                kubectl set image deployment/frontend \
                frontend=$FRONTEND_IMAGE \
                -n enterprise-app
                '''
            }
        }

        stage('Verify Rollout') {
            steps {
                sh '''
                kubectl rollout status deployment/backend -n enterprise-app
                kubectl rollout status deployment/frontend -n enterprise-app
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline Executed Successfully.'
        }

        failure {
            echo 'Pipeline Failed.'
        }
    }
}