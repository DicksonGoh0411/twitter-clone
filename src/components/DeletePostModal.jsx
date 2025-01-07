import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postsSlice";
import { AuthContext } from "./AuthProvider";

export default function DeletePostModal({
    show,
    handleClose,
    postId,
}) {
    const dispatch = useDispatch();
    const { currentUser } = useContext(AuthContext);
    const userId = currentUser.uid;

    const handleDelete = () => {
        dispatch(deletePost({ userId, postId }));
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>Delete Post Confirmation</Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this post?
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="danger"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


