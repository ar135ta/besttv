try {
  const config = {
    targetId: "video-player",
    provider: {
      partnerId: "1091",
      uiConfId: "15215933"
    }
  };
  var kalturaPlayer = KalturaPlayer.setup(config);
  
  kalturaPlayer.setMedia({
    //use setMedia instead of loadMedia API
    session: {
      isAnonymous: true, //if ks is for anonymous or login
      partnerId: 1234, //you partner id
      uiConfId: 1234 //your uiconf
    },
    sources: {
      //you can pass also only hls or only dash and as long as platform support it it will work
      hls: [
        {
          url:
            "https://link.zozotv.xyz:443/live/Amir60/28602860/120.m3u8",
          mimetype: "application/x-mpegURL"
        }
      ],
      progressive: [],
      id: "1_r0tzzzgp", //entry ID
      type: "Live", //either vod or live
      poster: "https://i.postimg.cc/cH5sjNJD/wallbest.png", // poster url
      dvr: false, //for live, if DVR or not
      vr: null, //
      metadata: {
        name: "Live test for AWS", //entry name
        description: ""
      }
    },
    plugins: {
      // secondaryUrl
    }
  });
} catch (e) {
  console.error(e.message);
}