pipeline {
    agent any

    stages {

        stage('Checkout Source Code') {
            steps {
                echo 'Checking out source code from GitHub...'
                checkout scm
            }
        }

        stage('Project Structure') {
            steps {
                echo 'Listing project files...'

                sh '''
                pwd
                ls -la
                ls -la backend
                ls -la frontend
                ls -la kubernetes
                '''
            }
        }
    }

    post {
        success {
            echo 'Repository cloned successfully.'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}