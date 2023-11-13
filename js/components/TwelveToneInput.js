export default {
  data() {
    return {
      // Define the row as an array of integers
      rowInput: [2, 0, 3, 7, 1, 8, 9, 11, 10, 6, 4, 5],
    };
  },
  methods: {
    generateRow() {
      let row = Array.from({length: 12}, (_, i) => i);
      for (let i = row.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [row[i], row[j]] = [row[j], row[i]];
      }
      this.rowInput = row;
    },
    submitRow() {
      // Emit the row as an array of integers
      this.$emit('update-row', this.rowInput);
    }
  },
  template: `
    <div class="twelve-tone-input">
      <div>
        Current Row: {{ rowInput.join(' ') }}
      </div>
      <button @click="generateRow">Generate Random Row</button>
      <button @click="submitRow">Submit Row</button>
    </div>
  `
};
