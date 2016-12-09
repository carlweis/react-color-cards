var Label = React.createClass({
  render: function() {
    var labelStyles = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 0
    };

    return(
      <p style={labelStyles}>{this.props.color}</p>
    );
  }
});
