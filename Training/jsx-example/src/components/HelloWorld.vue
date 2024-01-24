<script>
export default {
  name: "HelloWorld",
  render(h) {
    return (
      <div>
        <div
          class="text-center"
          on-click={this.pressed}
          domPropsInnerHTML={this.msg}
        />
      </div>
    );
  },
  data() {
    return {
      msg: `<h${this.header}>안녕하세요 ${this.name}님</h${this.header}>`
    };
  },
  methods: {
    pressed() {
      // eslint-disable-next-line no-alert
      alert("클릭했어요");
    }
  },
  props: ["header", "name"]
};
</script>
