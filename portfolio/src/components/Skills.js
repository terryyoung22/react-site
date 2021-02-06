import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class skilllist extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center',  color: 'white', padding: 45, fontSize: 25 }}>
                <div><h2>My Skills!</h2>
                    <Card style={{ width: '50rem' }}>
                        <ListGroup>
                            <ListGroup.Item>Docker</ListGroup.Item><br></br>
                            <ListGroup.Item>Kubernetes/orchestration: (EKS/ECS/DockerSwarm/Docker-compose</ListGroup.Item><br></br>
                            <ListGroup.Item>CI/CD Tools: (Jenkins/Github Actions/Team City/TravisCI)</ListGroup.Item><br></br>
                            <ListGroup.Item>Programming languages: (Python/Nodejs/React/Ruby/Java/Go)</ListGroup.Item><br></br>
                            <ListGroup.Item>AWS certified: Solutions Architect Assoc.</ListGroup.Item><br></br>
                            <ListGroup.Item>And much more!!</ListGroup.Item><br></br>
                        </ListGroup>
                        <p><a href="./" onclick="window.history.go(-1); return false;"> ⬅️ Home </a></p>
                    </Card>
                </div>
            </div>
        );
    }
}

export default skilllist;