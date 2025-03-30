pipeline {
    agent any

    environment {
        K6_PATH = '/opt/homebrew/bin/k6' // Pastikan path ini sesuai dengan lokasi K6 di macOS (cara cek nya ketik 'which k6')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/muhammadikbal21/fakestore-performance-test.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install' // Jika ada dependensi Node.js untuk K6
            }
        }

        stage('Run Load Test') {
            steps {
                sh '${K6_PATH} run test/loadTest.js'
            }
        }

        stage('Run Stress Test') {
            steps {
                sh '${K6_PATH} run test/stressTest.js'
            }
        }

        stage('Check K6') {
            steps {
                sh 'echo $K6_PATH'
                sh '$K6_PATH version'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'results/*.json', fingerprint: true
        }
    }
}
