
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { toggledCount: 0 };
      this.handleToggle = this.handleToggle.bind(this);
    }
  
    handleToggle(isActive) {
      this.setState(prevState => ({
        toggledCount: prevState.toggledCount + (isActive ? 1 : -1)
      }));
    }
  
    render() {
      return (
        <div>
          {Array.from({ length: 30 }).map((_, i) => (
            <ProjectSkill key={i} onToggle={this.handleToggle} skill={`Skill ${i+1}`} />
          ))}
          <p>{this.state.toggledCount} buttons are toggled.</p>
        </div>
      );
    }
  }
  