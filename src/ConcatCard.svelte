<script>
    export let title, content;
</script>

<div class="card">
    <div class="title item">{title}</div>
    <div class="content item">{content}</div>
</div>

<style>
    .card {
      display: flex;
      width: clamp(100px, 150px, 200px);
      height: clamp(100px, 150px, 200px);

      background-color: black;
      padding: 20px;
      border-radius: 25%;
      justify-content: center;
      flex-direction: column;
    }
    .title {
      font-family: fantasy;
      font-size: 3rem;
    }
</style>
