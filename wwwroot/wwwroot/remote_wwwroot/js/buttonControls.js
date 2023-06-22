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

    $(".heightstepper").attr("style", "height: 2300px");
    $("#motherDiv").attr("style", "display: block");

    $("#childDiv").attr("style", "display: none");
    $("#childInfoId").addClass("stepper-completed");
  });

  $("#prevChild").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#childInfoId").addClass("stepper-active");
    $("#motherInfoId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1400px");

    $("#childDiv").attr("style", "display: block");
    $("#motherDiv").attr("style", "display: none");
  });

  $("#fatherNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#motherInfoId").removeClass("stepper-active");
    $("#fatherInfoId").addClass("stepper-active ");

    $(".heightstepper").attr("style", "height: 1900px");

    // $("#fatherDiv").addClass(" slide-in-right animation fast");
    $("#fatherDiv").attr("style", "display: block");
    $("#motherDiv").attr("style", "display: none");
    $("#motherInfoId").addClass("stepper-completed");
  });

  $("#prevMother").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#motherInfoId").addClass("stepper-active");
    $("#fatherInfoId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 2300px");

    $("#motherDiv").attr("style", "display: block");
    $("#fatherDiv").attr("style", "display: none");
  });

  $("#InfoNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#fatherInfoId").removeClass("stepper-active");
    $("#InfoId").addClass("stepper-active ");

    $(".heightstepper").attr("style", "height:1500px");

    // $("#fatherDiv").addClass(" slide-in-right animation fast");
    $("#infomDiv").attr("style", "display: block");
    $("#fatherDiv").attr("style", "display: none");
    $("#fatherInfoId").addClass("stepper-completed");
  });

  $("#prevFather").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#fatherInfoId").addClass("stepper-active");
    $("#InfoId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1900px");

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

    $(".heightstepper").attr("style", "height:1400px");

    $("#decDiv").attr("style", "display: block");
    $("#attDiv").attr("style", "display: none");
    $("#attId").addClass("stepper-completed");
  });

  $("#prevInfro").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#InfoId").addClass("stepper-active");
    $("#sumId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1500px");

    $("#infomDiv").attr("style", "display: block");
    $("#sumDiv").attr("style", "display: none");
  });

  $("#prevAtt").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#attId").addClass("stepper-active");
    $("#decId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1500px");

    $("#attDiv").attr("style", "display: block");
    $("#decDiv").attr("style", "display: none");
  });

  // Death control
  $("#gerNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#gerId").addClass("stepper-active");
    $("#decId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1200px");

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

    $(".heightstepper").attr("style", "height: 1200px");

    $("#gerDiv").attr("style", "display: block");
    $("#decDiv").attr("style", "display: none");
    $("#decId").addClass("stepper-completed");
  });

  $("#inforNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#InforId").addClass("stepper-active");
    $("#gerId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1200px");

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

    $(".heightstepper").attr("style", "height: 1250px");

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

     $(".heightstepper").attr("style", "height: 1900px");

    $("#brideDiv").attr("style", "display: block");
    $("#groomDiv").attr("style", "display: none");
    $("#groomId").addClass("stepper-completed");
  });

  $("#prevGroom").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#groomId").addClass("stepper-active");
    $("#brideId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1900px");

    $("#groomDiv").attr("style", "display: block");
    $("#brideDiv ").attr("style", "display: none");
  });

  $("#regNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#regId").addClass("stepper-active");
    $("#witId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1300px");

    $("#regDiv").attr("style", "display: block");
    $("#witDiv").attr("style", "display: none");
    $("#witId").addClass("stepper-completed");
  });

  $("#prevBride").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#brideId").addClass("stepper-active");
    $("#witId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1900px");

    $("#brideDiv").attr("style", "display: block");
    $("#witDiv ").attr("style", "display: none");
  });

  $("#witNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#witId").addClass("stepper-active");
    $("#brideId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1500px");

    $("#witDiv").attr("style", "display: block");
    $("#brideDiv").attr("style", "display: none");
    $("#brideId").addClass("stepper-completed");
  });

  $("#prevReg").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#regId").addClass("stepper-active");
    $("#attmarrId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1300px");

    $("#regDiv").attr("style", "display: block");
    $("#attmarrDiv").attr("style", "display: none");
  });

  $("#attmarrNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#attmarrId").addClass("stepper-active");
    $("#regId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1000px");

    $("#attmarrDiv").attr("style", "display: block");
    $("#regDiv").attr("style", "display: none");
    $("#regId").addClass("stepper-completed");
  });

  $("#prevWit").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#witId").addClass("stepper-active");
    $("#regId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1400px");

    $("#witDiv").attr("style", "display: block");
    $("#regDiv").attr("style", "display: none");
  });

  $("#desmarrNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#desmarrId").addClass("stepper-active");
    $("#attmarrId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1300px");

    $("#desmarrDiv").attr("style", "display: block");
    $("#attmarrDiv").attr("style", "display: none");
    $("#attmarrId").addClass("stepper-completed");
  });

  $("#prevAttmarr").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#attmarrId").addClass("stepper-active");
    $("#desmarrId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1300px");

    $("#attmarrDiv").attr("style", "display: block");
    $("#desmarrDiv").attr("style", "display: none");
    $("#attmarrId").addClass("stepper-completed");
  });

  //Adoption
  $("#adoFatherNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#adoFatherId").addClass("stepper-active");
    $("#childId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1400px");

    $("#adoFatherDiv").attr("style", "display: block");
    $("#childDiv").attr("style", "display: none");
    $("#childId").addClass("stepper-completed");
  });

  $("#prevadoChild").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#childId").addClass("stepper-active");
    $("#adoFatherId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#childDiv").attr("style", "display: block");
    $("#adoFatherDiv").attr("style", "display: none");
    $("#adoFatherId").addClass("stepper-completed");
  });

  $("#adoMotherNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#adoMotherId").addClass("stepper-active");
    $("#adoFatherId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#adoMotherDiv").attr("style", "display: block");
    $("#adoFatherDiv").attr("style", "display: none");
    $("#adoFatherId").addClass("stepper-completed");
  });

  $("#prevadoFather").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#adoFatherId ").addClass("stepper-active");
    $("#adoMotherId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#adoFatherDiv").attr("style", "display: block");
    $("#adoMotherDiv").attr("style", "display: none");
    $("#adoMotherId").addClass("stepper-completed");
  });

  $("#adoAttNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#attadopId ").addClass("stepper-active");
    $("#adoMotherId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#attadopDiv").attr("style", "display: block");
    $("#adoMotherDiv").attr("style", "display: none");
    $("#adoMotherId").addClass("stepper-completed");
  });

  $("#prevadoMother").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#adoMotherId").addClass("stepper-active");
    $("#attadopId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#adoMotherDiv").attr("style", "display: block");
    $("#attadopDiv").attr("style", "display: none");
    $("#adoMotherId").addClass("stepper-completed");
  });

  $("#desadopNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#desadopId ").addClass("stepper-active");
    $("#attadopId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#desadopDiv").attr("style", "display: block");
    $("#attadopDiv").attr("style", "display: none");
    $("#attadopId").addClass("stepper-completed");
  });

  $("#prevAttadop").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#attadopId ").addClass("stepper-active");
    $("#desadopId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#attadopDiv").attr("style", "display: block");
    $("#desadopDiv").attr("style", "display: none");
    $("#desadopId").addClass("stepper-completed");
  });

    // Marriage No Impedement
    $("#info-nomarrNext").click(() => {
        document.getElementById("mainpage").scrollIntoView();
        $("#nomarriageId").removeClass("stepper-active");
        $("#info-nomarrId").addClass("stepper-active ");

        $("#info-nomarrDiv").attr("style", "display:block");
        $("#nomarriageDiv").attr("style", "display:none");
        $("#nomarriageId").addClass("stepper-completed");
    });

    $("#prev-noMarr").click(() => {
        document.getElementById("mainpage").scrollIntoView();
        $("#info-nomarrId").removeClass("stepper-active");
        $("#nomarriageId").addClass("stepper-active");

        $("#nomarriageDiv").attr("style", "display:block");
        $("#info-nomarrDiv").attr("style", "display:none");
        $("#nomarriageId").addClass("stepper-completed");
    });

    $("#att-nomarrNext").click(() => {
        document.getElementById("mainpage").scrollIntoView();
        $("#info-nomarrId").removeClass("stepper-active");
        $("#attnomarrId").addClass("stepper-active");

        $("#attnomarrDiv").attr("style", "display:block");
        $("#info-nomarrDiv").attr("style", "display:none");
        $("#info-nomarrId").addClass("stepper-completed");
    });

    $("#previnfoMarr").click(() => {
        document.getElementById("mainpage").scrollIntoView();
        $("#attnomarrId").removeClass("stepper-active");
        $("#info-nomarrId").addClass("stepper-active");

        $("#info-nomarrDiv").attr("style", "display:block");
        $("#attnomarrDiv").attr("style", "display:none");
        $("#info-nomarrId").addClass("stepper-completed");
    });

    $("#desnomarrNext").click(() => {
        document.getElementById("mainpage").scrollIntoView();
        $("#attnomarrId").removeClass("stepper-active");
        $("#desnomarrId").addClass("stepper-active");

        $("#desnomarrDiv").attr("style", "display:block");
        $("#attnomarrDiv").attr("style", "display:none");
        $("#attnomarrId").addClass("stepper-completed");
    });

    $("#prevAttnomarr").click(() => {
        document.getElementById("mainpage").scrollIntoView();
        $("#desnomarrId").removeClass("stepper-active");
        $("#attnomarrId").addClass("stepper-active");

        $("#attnomarrDiv").attr("style", "display:block");
        $("#desnomarrDiv").attr("style", "display:none");
    });

  // const All_Details = document.querySelectorAll("details");

  // All_Details.forEach((deet) => {
  //   deet.addEventListener("toggle", toggleOpenOneOnly);
  // });

  // function toggleOpenOneOnly(e) {
  //   if (this.open) {
  //     All_Details.forEach((deet) => {
  //       if (deet != this && deet.open) deet.open = false;
  //     });
  //   }
  // }

  //const input = document.getElementById("fileInput");

  //const convertBase64 = (file) => {
  //  return new Promise((resolve, reject) => {
  //    const fileReader = new FileReader();
  //    fileReader.readAsDataURL(file);

  //    fileReader.onload = () => {
  //      resolve(fileReader.result);
  //    };

  //    fileReader.onerror = (error) => {
  //      reject(error);
  //    };
  //  });
  //};

  //const uploadImage = async (event) => {
  //  const file = event.target.files[0];
  //  const base64 = await convertBase64(file);

  //  $("#fileview").attr("src", base64);
  //  console.log(base64);
  //};

  //input.addEventListener("change", (e) => {
  //  uploadImage(e);
  //});
});
