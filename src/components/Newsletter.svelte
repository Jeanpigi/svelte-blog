<style>
  input {
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    color: rgba(0, 0, 0, 0.75);
    display: inline-block;
    font-feature-settings: "thum";
    font-size: 1.4rem;
    height: 3.2rem;
    line-height: 3.2rem;
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 4px 12px;
    width: 100%;
  }

  h4 {
    font-size: 1.6rem;
  }

  p {
    font-weight: 300;
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  form {
    position: relative;
    width: 100%;
  }

  .btn {
    box-shadow: inset 0px 1px 0px 0px #bee2f9;
    background: linear-gradient(to bottom, #7e5c87 5%, #343540 100%);
    background-color: #7e5c87;
    border-radius: 6px;
    border: 1px solid #7e5c87;
    display: inline-block;
    cursor: pointer;
    color: #fff;
    font-family: "Arial";
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #7cacde;
    width: 100%;
  }

  .btn:hover {
    background: linear-gradient(to bottom, #343540 5%, #7e5c87 100%);
    background: #343540;
  }

  .btn:active {
    position: relative;
    top: 1px;
  }

  label {
    font-size: 1.2rem;
  }
</style>

<div class="Newsletter">
  <h4>NEWSLETTER</h4>
  <p>Recibe las últimas novedades sobre frontend y tecnologia en tu correo</p>
  <form
    action="https://tinyletter.com/jeanpierre666"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://tinyletter.com/jeanpierre666', 'popupwindow',
    'scrollbars=yes,width=800,height=600');return true">
    <p><label for="tlemail">Enter your email address</label></p>
    <p><input type="text" style="width:140px" name="email" id="tlemail" /></p>
    <input type="hidden" value="1" name="embed" />
    <button class="btn" type="submit" value="Subscribe">Subscribirse</button>
    <p>
      <a href="https://tinyletter.com" target="_blank">No enviamos spam.</a>
    </p>
  </form>
</div>
