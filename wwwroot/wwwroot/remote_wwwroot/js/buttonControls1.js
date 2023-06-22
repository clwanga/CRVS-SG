$(document).ready(function () {
  $("#open_sidebar").click(() => {
    $("#sidebar").removeClass("hidden");
    $("#sidebar").addClass("block");
  });

  $("#close_sidebar").click(() => {
    $("#sidebar").addClass("hidden");
    $("#sidebar").removeClass("block");
  });

  $("#motherNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#childInfoId").removeClass("stepper-active");
    $("#motherInfoId").addClass("stepper-active ");

    $(".heightstepper").attr("style", "height: 2010px");
    $("#motherDiv").attr("style", "display: block");

    $("#childDiv").attr("style", "display: none");
    $("#childInfoId").addClass("stepper-completed");
  });

  $("#prevChild").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#childInfoId").addClass("stepper-active");
    $("#motherInfoId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1000px");

    $("#childDiv").attr("style", "display: block");
    $("#motherDiv").attr("style", "display: none");
  });

  $("#fatherNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#motherInfoId").removeClass("stepper-active");
    $("#fatherInfoId").addClass("stepper-active ");

    $(".heightstepper").attr("style", "height: 1300px");

    // $("#fatherDiv").addClass(" slide-in-right animation fast");
    $("#fatherDiv").attr("style", "display: block");
    $("#motherDiv").attr("style", "display: none");
    $("#motherInfoId").addClass("stepper-completed");
  });

  $("#prevMother").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#motherInfoId").addClass("stepper-active");
    $("#fatherInfoId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 2010px");

    $("#motherDiv").attr("style", "display: block");
    $("#fatherDiv").attr("style", "display: none");
  });

  $("#InfoNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#fatherInfoId").removeClass("stepper-active");
    $("#InfoId").addClass("stepper-active ");

    $(".heightstepper").attr("style", "height:1000px");

    // $("#fatherDiv").addClass(" slide-in-right animation fast");
    $("#infomDiv").attr("style", "display: block");
    $("#fatherDiv").attr("style", "display: none");
    $("#fatherInfoId").addClass("stepper-completed");
  });

  $("#prevFather").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#fatherInfoId").addClass("stepper-active");
    $("#InfoId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1300px");

    $("#fatherDiv").attr("style", "display: block");
    $("#infomDiv").attr("style", "display: none");
  });

  $("#attNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#InfoId").removeClass("stepper-active");
    $("#attId").addClass("stepper-active ");

    $(".heightstepper").attr("style", "height:3000px");

    $("#attDiv").attr("style", "display: block");
    $("#infomDiv").attr("style", "display: none");
    $("#InfoId").addClass("stepper-completed");
  });

  $("#decNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#attId").removeClass("stepper-active");
    $("#decId").addClass("stepper-active ");

    $(".heightstepper").attr("style", "height:1000px");

    $("#decDiv").attr("style", "display: block");
    $("#attDiv").attr("style", "display: none");
    $("#attId").addClass("stepper-completed");
  });

  $("#prevInfro").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#InfoId").addClass("stepper-active");
    $("#sumId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1300px");

    $("#infomDiv").attr("style", "display: block");
    $("#sumDiv").attr("style", "display: none");
  });

  $("#prevAtt").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#attId").addClass("stepper-active");
    $("#decId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1300px");

    $("#attDiv").attr("style", "display: block");
    $("#decDiv").attr("style", "display: none");
  });

  // Death control
  $("#gerNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#gerId").addClass("stepper-active");
    $("#decId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1100px");

    $("#gerDiv").attr("style", "display: block");
    $("#decDiv").attr("style", "display: none");
  });

  $("#prevDec").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#decId").addClass("stepper-active");
    $("#gerId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 2500px");

    $("#decDiv").attr("style", "display: block");
    $("#gerDiv").attr("style", "display: none");
    $("#gerId").addClass("stepper-completed");
  });

  $("#gerNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#gerId").addClass("stepper-active");
    $("#decId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1100px");

    $("#gerDiv").attr("style", "display: block");
    $("#decDiv").attr("style", "display: none");
    $("#decId").addClass("stepper-completed");
  });

  $("#inforNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#InforId").addClass("stepper-active");
    $("#gerId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1100px");

    $("#inforDiv").attr("style", "display: block");
    $("#gerDiv").attr("style", "display: none");
    $("#gerId").addClass("stepper-completed");
  });

  $("#prevGer").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#gerId").addClass("stepper-active");
    $("#InforId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 2500px");

    $("#gerDiv").attr("style", "display: block");
    $("#inforDiv").attr("style", "display: none");
    $("#InforId").addClass("stepper-completed");
  });

  $("#attdecNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#attdecId").addClass("stepper-active");
    $("#InforId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 900px");

    $("#attdecDiv").attr("style", "display: block");
    $("#inforDiv").attr("style", "display: none");
    $("#InforId").addClass("stepper-completed");
  });

  $("#prevInfor").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#InforId").addClass("stepper-active");
    $("#attdecId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 2500px");

    $("#inforDiv").attr("style", "display: block");
    $("#attdecDiv").attr("style", "display: none");
    $("#attdecId").addClass("stepper-completed");
  });

  $("#desNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#desId").addClass("stepper-active");
    $("#attdecId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1000px");

    $("#desDiv").attr("style", "display: block");
    $("#attdecDiv").attr("style", "display: none");
    $("#attdecId").addClass("stepper-completed");
  });

  $("#prevInfor").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#InforId").addClass("stepper-active");
    $("#attdecId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 2500px");

    $("#inforDiv").attr("style", "display: block");
    $("#attdecDiv").attr("style", "display: none");
  });

  $("#prevAttdec").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#attdecIdId").addClass("stepper-active");
    $("#desId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 2500px");

    $("#attdecDiv").attr("style", "display: block");
    $("#desDiv").attr("style", "display: none");
  });

  // Marriage
  $("#brideNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    
    $("#brideId").addClass("stepper-active");
    $("#groomId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#brideDiv").attr("style", "display: block");
    $("#groomDiv").attr("style", "display: none");
    $("#groomId").addClass("stepper-completed");
  });

  $("#prevGroom").click(() => {
    document.getElementById("mainpage").scrollIntoView();
   
    $("#groomId").addClass("stepper-active");
    $("#brideId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1600px");

    $("#groomDiv").attr("style", "display: block");
    $("#brideDiv ").attr("style", "display: none");
    
  });

   $("#regNext").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#regId").addClass("stepper-active");
     $("#brideId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 400px");

     $("#regDiv").attr("style", "display: block");
     $("#brideDiv").attr("style", "display: none");
     $("#brideId").addClass("stepper-completed");
   });

   $("#prevBride").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#brideId").addClass("stepper-active");
     $("#regId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 1600px");

     $("#brideDiv").attr("style", "display: block");
     $("#regDiv ").attr("style", "display: none");
     
   });

   $("#witNext").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#witId").addClass("stepper-active");
     $("#regId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 400px");

     $("#witDiv").attr("style", "display: block");
     $("#regDiv").attr("style", "display: none");
     $("#regId").addClass("stepper-completed");
   });

   $("#prevReg").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#regId").addClass("stepper-active");
     $("#witId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 400px");

     $("#regDiv").attr("style", "display: block");
     $("#witDiv").attr("style", "display: none");
     
   });

   $("#attmarrNext").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#attmarrId").addClass("stepper-active");
     $("#witId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 400px");

     $("#attmarrDiv").attr("style", "display: block");
     $("#witDiv").attr("style", "display: none");
     $("#witId").addClass("stepper-completed");
   });

   $("#prevWit").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#witId").addClass("stepper-active");
     $("#attmarrId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 400px");

     $("#witDiv").attr("style", "display: block");
     $("#attmarrDiv").attr("style", "display: none");
   });

   $("#desmarrNext").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#desmarrId").addClass("stepper-active");
     $("#attmarrId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 1000px");

     $("#desmarrDiv").attr("style", "display: block");
     $("#attmarrDiv").attr("style", "display: none");
     $("#attmarrId").addClass("stepper-completed");
   });

   $("#prevAttmarr").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#attmarrId").addClass("stepper-active");
     $("#desmarrId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 800px");

     $("#attmarrDiv").attr("style", "display: block");
     $("#desmarrDiv").attr("style", "display: none");
     $("#attmarrId").addClass("stepper-completed");
   });



  const input = document.getElementById("fileInput");

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);

    $("#fileview").attr("src", base64);
    console.log(base64);
  };

  input.addEventListener("change", (e) => {
    uploadImage(e);
  });
});
