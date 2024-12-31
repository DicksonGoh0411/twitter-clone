import { Button, Col, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function ProfilePostCard({ content, postId }) {
    const pic = "https://pbs.twimg.com/profile_images/1587405892437221376/h167Jlb2_400x400.jpg"
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        fetch(`https://54fbc052-e8b2-4afa-b8a1-65d542d26450-00-25do3j1jdukp2.pike.repl.co/likes/post/${postId}`)
            .then((response) => response.json())
            .then((data) => {
                // Assuming the backend returns likeCount in the response
                setLikes(Number(data.likeCount)); // Ensure that the likeCount is treated as a number
            })
            .catch((error) => console.error("Error:", error));
    }, [postId]);


    return (
        <Row className="p-3" style={{ borderTop: "1px solid #D3D3D3", borderBottom: "1px solid #D3D3D3" }}>
            <Col sm={1}>
                <Image src={pic} fluid roundedCircle />
            </Col>

            <Col>
                <strong>Haris</strong>
                <span> @haris.samingan · Apr 16</span>
                <p>{content}</p>
                <div className="d-flex justify-content-between">
                    <Button variant="light">
                        <i className="bi bi-chat"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-repeat"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-heart"> {likes}</i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-graph-up"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-upload"></i>
                    </Button>
                </div>
            </Col>
        </Row>
    )
}