const musicList = document.getElementById("music-list");
    let musics = [
			["we are watching", "./snd/waw/snd3.mp3"],
			["salvation", "./snd/waw/snd2.mp3"],
			["thereby hangs a tale", "./snd/waw/snd1.mp3"],
			["", ""],
			["take care of your plants", "./snd/takecareofyourplants/theme.mp3"],
			["emptyness", "./snd/takecareofyourplants/emptyness.mp3"],
			["", ""],
      ["Nostalgia", "./snd/Nostalgia/nostalgia.mp3"],
      ["Catnip", "./snd/Nostalgia/outro.mp3"],
      ["Coziness", "./snd/Nostalgia/coziness.mp3"],
			["Sleeping awake", "./snd/Nostalgia/sleeping awake.mp3"],
      ["", ""],
			["universe 04/sep/2020", "./snd/synth/universe.mp3"],
      ["", ""],
      ["whoami 24/nov/2020", "./snd/trash/whoami.mp3"],
      ["end 31/jan/2021", "./snd/trash/end.mp3"],
      ["down 31/jan/2021", "./snd/trash/down.mp3"],
      ["old times 24/apr/2020", "./snd/trash/old.mp3"],
      ["", ""],
      ["alone and sentimental 14/apr/2020", "./snd/lofi/sentimental.mp3"],
			["",""],
			["i digress", "./snd/me/i digress.mp3"],
      ["", ""],
      ["Terrible Phonk Attempt", "./snd/phonk.mp3"],
    ];

    for(let i = 0; i < musics.length; i++) {
      add_element(musics[i][0], musics[i][1]);
    }

    function add_element(name, link) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = link;
      a.innerHTML = name;
      li.appendChild(a);
      musicList.appendChild(li);
    }