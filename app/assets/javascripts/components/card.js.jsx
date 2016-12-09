var Card = React.createClass({
  render: function() {
    var cardStyles = {
      height: 200,
      width: 150,
      padding: 0,
      margin: "auto",
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    };

    return(
      <div style={cardStyles}>
        <Square {...this.props}/>
        <Label {...this.props}/>
      </div>
    );
  }
});
