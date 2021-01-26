class Media {
  async getCamera(audio=false, vide=true) {
    return navigator.mediaDevices.getUserMedia({
      video,
      audio
    })
  }
}