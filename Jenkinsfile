pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "deepmeshram0149/enterprise-backend:v2"
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
    }

    post {
        success {
            echo 'Backend image built and pushed successfully.'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}