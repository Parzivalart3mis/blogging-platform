# CampusNexus

CampusNexus is a comprehensive platform designed to streamline campus life and academic administration. This project connects students, faculty, and administration by providing a centralized hub for communication, scheduling, and resource sharing.

## Overview

CampusNexus is an all-in-one solution tailored for educational institutions. It integrates essential campus services such as course management, event scheduling, notifications, and resource management into one seamless platform. Our mission is to enhance campus connectivity and simplify academic workflows.

## Features

- **User-friendly Interface:** Easy-to-navigate design for students, teachers, and administrators.
- **Event Management:** Schedule and manage campus events, academic deadlines, and more.
- **Resource Sharing:** Centralized repository for documents, multimedia, and academic materials.
- **Real-time Notifications:** Instant alerts and announcements to keep everyone informed.

## Installation

To set up CampusNexus locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Parzivalart3mis/blogging-platform.git

2. **Navigate to the Project Directory**
    ```bash
    cd Blogging-Website

3. **Install Dependencies**
    ```bash
     npm install

4. **Run the Application**
    ```bash
    npm start
    node src/App.js

## Elasticsearch Debugging
Test Elasticsearch Connection with cURL
Search for a Post by Title (Example: "valorant")

    curl -X POST "http://localhost:9200/posts/_search" \
    -H "Content-Type: application/json" \
    -d '{ "query": { "wildcard": { "title": "valorant" } } }'

Check if Elasticsearch is Running

    curl -X GET "http://localhost:9200"

Check Elasticsearch Cluster Health

    curl -k -u elastic:78lE7-J88xqqIMDvcxhX "https://localhost:9200/_cluster/health?pretty"

Running Elasticsearch with Docker\
Ensure you have Docker installed, then pull and run the Elasticsearch image:

    docker pull elasticsearch:latest
    docker run -d -p 9200:9300 -e "discovery.type=single-node" elasticsearch

## Usage
Once installed, you can start using CampusNexus by accessing the web application at `http://localhost:3000` in your browser.
