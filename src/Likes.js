import { connect } from "react-redux";

function Likes(props) {
  console.log(props);
  return (
    <div className="button-controls">
      <button>🖤 {props.like}</button>
      <button>Dislike</button>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("mapStateToProps >", state);
  return {
    likes: state.lakes
  }
}

export default connect(mapStateToProps) (Likes);
