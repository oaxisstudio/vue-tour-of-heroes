export default {
  state: {
    heroes: [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ],
    messages: []
  },
  getHeroes: function () {
    this.addMessage('HeroService: fetched heroes');
    return this.state.heroes;
  },
  getHero: function (id) {
    this.addMessage(`HeroService: Selected hero id=${id}`);
    // TODO:idを比較するときのベストプラクティスを調べる
    return this.state.heroes.find((hero) => hero.id === Number(id));
  },
  addMessage: function (message) {
    this.state.messages.push(message);
  },
  clearMessages() {
    this.state.messages = [];
    return this.state.messages;
  }
}