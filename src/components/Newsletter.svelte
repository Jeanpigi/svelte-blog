<div class="Newsletter">
  <div class="Newsletter-head">
    <h4>NEWSLETTER</h4>
    <p>
      Recibe las últimas novedades sobre frontend y tecnologia en tu correo.
    </p>
  </div>

  <div class="Newsletter-form">
    <form
      action="https://tinyletter.com/jeanpierre666"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://tinyletter.com/jeanpierre666', 'popupwindow',
      'scrollbars=yes,width=800,height=600');return true"
    >
      <label for="tlemail">Enter your email address</label>
      <input type="text" style="width:140px" name="email" id="tlemail" />
      <button class="btn" type="submit" value="Subscribe">Subscribirse</button>
    </form>
  </div>

  <div class="Newsletter-not-Spam">
    <a href="https://tinyletter.com" target="_blank">No enviamos spam.</a>
  </div>
</div>

<style>
.Newsletter {
  font-size: clamp(1.3rem, 2.5vw, 1.6rem);
}
  .Newsletter-head h4 {
    text-align: center;
  }
  .Newsletter-head p {
    font-weight: 300;
    color: #333;
    margin: 1rem 0;
    text-align: justify;
  }


  .Newsletter-form form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.3rem;
  }
  .Newsletter-form input {
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    color: rgba(0, 0, 0, 0.75);
    display: inline-block;
    font-feature-settings: "thum";
    height: 3.2rem;
    line-height: 3.2rem;
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 4px 12px;
    width: 100%;
  }
  

  .btn {
    box-shadow: inset 0px 1px 0px 0px #343540;
    background: linear-gradient(to bottom, #7e5c87 5%, #343540 100%);
    background-color: #7e5c87;
    border-radius: 6px;
    display: inline-block;
    cursor: pointer;
    color: #fff;
    font-family: "Arial";
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #343540;
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

.Newsletter-not-Spam {
  margin-top: 1rem;
    text-align: center;
}
  .Newsletter-not-Spam a {
    text-decoration: none;
    color: #343540;
  }
</style>
