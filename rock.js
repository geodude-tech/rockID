/* Programmed by Drew Scholz
 *
 *  Geological information gathered from:
 *   Laboratory Manual in Physical Geology 9th ed.
 *   by American Geological Institute
 *
 */

/* initialize variables */
var rockTypeMessage = "What is the Rock Type?";
var rockTypes = ["Igneous", "Sedimentary", "Metamorphic", "Not Sure"];
var compMessage = "What is the Mineralogical Composition and/or other distinctive features of the Rock?";
var sedCompositions = ["Detrital - fragmented sediment grains and/or silicate mineral crystals", "Biochemical - fragments/shells of organisms", "Mineral crystals (inorganic) or chemical residues"];
var foliatedFineGrainedComp = ["Dull luster; breaks into hard flat sheets along the slaty cleavage", "Breaks along wrinkled or wavy foliation surfaces with shiny metallic luster", "Crystalline - green pyroxene and red garnet"];
var foliatedCoarseGrainedComp = ["Needle-like, sparkling crystals with scaly foliation surfaces", "Visible crystals of two or more minerals in alternating light and dark foliated, banded layers", "Mostly visible glossy black amphibole (horneblende) in blade-like crystals"];
var nonfoliatedFineGrainedComp = ["Black glossy rock that breaks along uneven or conchoidal fractures", "Usually a dull dark color; very hard", "Serpentine; dull or glossy; color usually shades of green", "Talc; can be scratched with your fingernail; shades of green, gray, brown, white", "Crystalline - green pyroxene and red garnet"];
var nonfoliatedCoarseGrainedComp = ["Quartz sand grains fused together; grains will not rub off like sandstone; usually light colored", "Calcite (or dolomite) crystals of nearly equal size and tightly fused together; effervescent", "Pebble sized grains; may be stretched or cut by rock cleavage", "Mostly visible glossy black amphibole (hornblende) in blade-like crystals"];
var textureMessage = "What are the Textural Features of the Rock?";
var ignTextures = ["Coarse-grained", "Fine-grained", "Glassy", "Vesicular", "Pyroclastic"];
var detritalTextures = ["Mostly angular and/or subangular gravel (grains > 2 mm)", "Mostly subround and/or well rounded gravel (grains > 2 mm)", "Mostly sand (1/16-2 mm grains). May contain fossils", "Mostly silt. May contain fossils.", "Mostly clay. May contain fossils."];
var biochemicalTextures = ["Brown porous rock with visible plant fragments that are easily broken apart from one another", "Dull, dark brown, brittle rock; fossil plant fragments may be visible", "Black, layered, brittle rock; may be sooty or bright", "Mostly gravel-sized shells and shell or coral fragments", "Mostly sand-sized shell fragments; often contains a few larger whole fossil shells", "Silty, earthy rock comprised of the microscopic shells of calcareous microfossils; may contain a few visible fossils", "No visible grains in most of the rock. may break with conchoidal fracture fracture. May contain a few visible fossils."];
var mineralCrystalTextures = ["Mostly spherical grains that resemble miniature pearls (< 2 mm)", "Masses of visible crystals and/or microcrystalline; may have cavities, pores, or color banding; usually light colored", "Effervesces in dilute HCl only if powdered. Usually light colored.", "Visible cubic crystals, translucent, salty taste", "Gray, white, or colorless. Visible crystals or microcrystalline. Can be scratched with your fingernail", "Dark-colored, dense, amorphous masses, microcrystalline nodules or inter-layered with quartz or red chert", "Microcrystalline, may break with a conchoidal fracture. Hard (scratches glass). Usually gray, brown, black , or mottle mixture of those colors. May contain fossils."];
var metaTextures = ["Foliated - fine-grained or no visible grains", "Foliated - medium to coarse-grained", "Nonfoliated - fine-grained or no visible grains", "Nonfoliated - medium to coarse-grained"];
var ignMaficContentMessage = "What is the Rock's percent of mafic (green, dark gray, and black) mineral crystals?";
var ignMaficContent = ["Felsic (0 to 15% mafic crystals)", "Intermediate (16 to 45% mafic  crystals)", "Mafic (46 to 85% mafic crystals)", "Ultramafic (> 85% mafic crystals)"];
var ignRockList = [
  {name:"Granite or Syenite, if no quartz", texture:ignTextures[0], mci:ignMaficContent[0], url:"https://geology.com/rocks/granite.shtml"},
  {name:"Diorite", texture:ignTextures[0], mci:ignMaficContent[1], url:"https://geology.com/rocks/diorite.shtml"},
  {name:"Gabbro", texture:ignTextures[0], mci:ignMaficContent[2], url:"https://geology.com/rocks/gabbro.shtml"},
  {name:"Peridotite", texture:ignTextures[0], mci:ignMaficContent[3], url:"https://geology.com/rocks/peridotite.shtml"},
  {name:"Rhyolite", texture:ignTextures[1], mci:ignMaficContent[0], url:"https://geology.com/rocks/rhyolite.shtml"},
  {name:"Andesite", texture:ignTextures[1], mci:ignMaficContent[1], url:"https://geology.com/rocks/andesite.shtml"},
  {name:"Basalt", texture:ignTextures[1], mci:ignMaficContent[2], url:"https://geology.com/rocks/basalt.shtml"},
  {name:"Scoria or Vesicular Basalt", texture:ignTextures[3], mci:ignMaficContent[2], url:"https://geology.com/rocks/scoria.shtml"},
  {name:"Pumice", texture:ignTextures[3], mci:ignMaficContent[0], url:"https://geology.com/rocks/pumice.shtml"},
  {name:"Pumice", texture:ignTextures[3], mci:ignMaficContent[1], url:"https://geology.com/rocks/pumice.shtml"},
  {name:"Obsidian", texture:ignTextures[2], mci:ignMaficContent[0], url:"https://geology.com/rocks/obsidian.shtml"},
  {name:"Obsidian", texture:ignTextures[2], mci:ignMaficContent[1], url:"https://geology.com/rocks/obsidian.shtml"},
  {name:"Obsidian", texture:ignTextures[2], mci:ignMaficContent[2], url:"https://geology.com/rocks/obsidian.shtml"},
  {name:"Volcanic Tuff, if fragments < 2 mm or Volcanic Breccia, if fragments > 2 mm", texture:ignTextures[4], mci:ignMaficContent[0], url:"https://geology.com/rocks/tuff.shtml"},
  {name:"Volcanic Tuff, if fragments < 2 mm or Volcanic Breccia, if fragments > 2 mm", texture:ignTextures[4], mci:ignMaficContent[1], url:"https://geology.com/rocks/tuff.shtml"},
  {name:"Volcanic Tuff, if fragments < 2 mm or Volcanic Breccia, if fragments > 2 mm", texture:ignTextures[4], mci:ignMaficContent[2], url:"https://geology.com/rocks/tuff.shtml"},
  {name:"Komatiite, resembles Basalt", texture:ignTextures[1], mci:ignMaficContent[3], url:"https://geology.com/rocks/komatiite.shtml"},
  {name:"Komatiite, resembles Basalt", texture:ignTextures[2], mci:ignMaficContent[3], url:"https://geology.com/rocks/komatiite.shtml"},
  {name:"Komatiite, resembles Basalt", texture:ignTextures[3], mci:ignMaficContent[3], url:"https://geology.com/rocks/komatiite.shtml"},
  {name:"Komatiite, resembles Basalt", texture:ignTextures[4], mci:ignMaficContent[3], url:"https://geology.com/rocks/komatiite.shtml"}
];

var sedRockList = [
  {name: "Breccia", comp: sedCompositions[0], texture: detritalTextures[0], url:"https://geology.com/rocks/breccia.shtml"},
  {name: "Conglomerate", comp: sedCompositions[0], texture: detritalTextures[1], url:"https://geology.com/rocks/conglomerate.shtml"},
  {name: "Sandstone", comp: sedCompositions[0], texture: detritalTextures[2], url:"https://geology.com/rocks/sandstone.shtml"},
  {name: "Siltsone", comp: sedCompositions[0], texture: detritalTextures[3], url:"https://geology.com/rocks/siltstone.shtml"},
  {name: "Shale, if fissile or Claystone, if crumbles into blocks", comp: sedCompositions[0], texture: detritalTextures[4], url:"https://geology.com/rocks/shale.shtml"},
  {name: "Peat", comp: sedCompositions[1], texture: biochemicalTextures[0], url:"https://geology.com/rocks/coal.shtml"},
  {name: "Lignite", comp: sedCompositions[1], texture: biochemicalTextures[1], url:"https://geology.com/rocks/coal.shtml"},
  {name: "Bituminous Coal", comp: sedCompositions[1], texture: biochemicalTextures[2], url:"https://geology.com/rocks/coal.shtml"},
  {name: "Coquina", comp: sedCompositions[1], texture: biochemicalTextures[3], url:"https://geology.com/rocks/limestone.shtml"},
  {name: "Fossiliferous Limestone", comp: sedCompositions[1], texture: biochemicalTextures[4], url:"https://geology.com/rocks/limestone.shtml"},
  {name: "Chalk", comp: sedCompositions[1], texture: biochemicalTextures[5], url:"https://geology.com/rocks/limestone.shtml"},
  {name: "Micrite", comp: sedCompositions[1], texture: biochemicalTextures[6], url:"https://geology.com/rocks/limestone.shtml"},
  {name: "Oolitic Limestone", comp: sedCompositions[2], texture: mineralCrystalTextures[0], url:"https://geology.com/rocks/limestone.shtml"},
  {name: "Travertine", comp: sedCompositions[2], texture: mineralCrystalTextures[1], url:"https://geology.com/rocks/limestone.shtml"},
  {name: "Dolostone", comp: sedCompositions[2], texture: mineralCrystalTextures[2], url:"https://geology.com/rocks/dolomite.shtml"},
  {name: "Rock Salt", comp: sedCompositions[2], texture: mineralCrystalTextures[3], url:"https://geology.com/rocks/rock-salt.shtml"},
  {name: "Rock Gypsum", comp: sedCompositions[2], texture: mineralCrystalTextures[4], url:"https://geology.com/minerals/gypsum.shtml"},
  {name: "Ironstone", comp: sedCompositions[2], texture: mineralCrystalTextures[5], url:"https://geology.com/rocks/iron-ore.shtml"},
  {name: "Chert", comp: sedCompositions[2], texture: mineralCrystalTextures[6], url:"https://geology.com/rocks/chert.shtml"}
];

var metaRockList = [
  {name:"Slate", texture: metaTextures[0], comp: foliatedFineGrainedComp[0], url:"https://geology.com/rocks/slate.shtml"},
  {name:"Phyllite", texture: metaTextures[0], comp: foliatedFineGrainedComp[1], url:"https://geology.com/rocks/phyllite.shtml"},
  {name:"Eclogite", texture: metaTextures[0], comp: foliatedFineGrainedComp[2], url:"https://en.wikipedia.org/wiki/Eclogite"},
  {name:"Schist", texture: metaTextures[1], comp: foliatedCoarseGrainedComp[0], url:"https://geology.com/rocks/schist.shtml"},
  {name:"Gneiss", texture: metaTextures[1], comp: foliatedCoarseGrainedComp[1], url:"https://geology.com/rocks/gneiss.shtml"},
  {name:"Amphibolite", texture: metaTextures[1], comp: foliatedCoarseGrainedComp[2], url:"https://geology.com/rocks/amphibolite.shtml"},
  {name:"Anthracite Coal", texture: metaTextures[2], comp: nonfoliatedFineGrainedComp[0], url:"https://geology.com/rocks/coal.shtml"},
  {name:"Hornfels", texture: metaTextures[2], comp: nonfoliatedFineGrainedComp[1], url:"https://geology.com/rocks/hornfels.shtml"},
  {name:"Serpentinite", texture: metaTextures[2], comp: nonfoliatedFineGrainedComp[2], url:"https://en.wikipedia.org/wiki/Serpentinite"},
  {name:"Soapstone", texture: metaTextures[2], comp: nonfoliatedFineGrainedComp[3], url:"https://geology.com/rocks/soapstone.shtml"},
  {name:"Eclogite", texture: metaTextures[2], comp: nonfoliatedFineGrainedComp[4], url:"https://en.wikipedia.org/wiki/Eclogite"},
  {name:"Quartzite", texture: metaTextures[3], comp: nonfoliatedCoarseGrainedComp[0], url:"https://geology.com/rocks/quartzite.shtml"},
  {name:"Marble", texture: metaTextures[3], comp: nonfoliatedCoarseGrainedComp[1], url:"https://geology.com/rocks/marble.shtml"},
  {name:"Meta-conglomerate", texture: metaTextures[3], comp: nonfoliatedCoarseGrainedComp[2], url:"https://en.wikipedia.org/wiki/Metaconglomerate"},
  {name:"Amphibolite", texture: metaTextures[3], comp: nonfoliatedCoarseGrainedComp[3], url:"https://geology.com/rocks/amphibolite.shtml"}
];

/* variable for determining if rock is Igneous, Sedimentary, or Metamorphic (pg. 93)*/
var ism = ["The rock has layering", "No visible grains are present in the rock", "Visible grains are present in the rock", "The rock has additional features"];
var ismLayers = ["Layers are flat and soft or crumbly", "Layers are made of mud, sand, or gravel", "Layers are made of crystals, which are about the same size in all layers", "Layers are made of crystals, which are of different sizes in different layers", "Layers are folded or otherwise deformed"];
var ismNoVisibleGrains = ["Looks like dry clay or mud", "Looks glassy; dense and hard, like window glass", "Looks glassy; brittle, lightweight, opaque black", "Very soft, easily scratched with fingernail", "Very hard", "Reacts (effervesces) with drop of dilute HCl"];
var ismVisibleGrains = ["Contains whole or fragmented fossils", "Contains deformed/barely recognizable fossils","Grains are mostly sand, silt, or gravel", "Contains rounded grains (like pebbles)", "Contains grains that are fragments of other rocks", "Grains are mostly mineral crystals (crystalline)", "Crystals are randomly oriented in very hard rock", "Large crystals sit in a very hard groundmass/matrix with smaller crystals or no visible grains", "Crystals can be easily scratched and/or broken apart", "Crystals are flat and/or foliated (lay parallel to one another)", "Effervescent with equigranular crystals", "Effervescent with different sized and/or layered crystals", "Crystals are mostly gypsum or halite", "Crystals are mostly olivine, feldspar, or pyroxene", "Crystals are mostly garnet, micas (muscovite, biotite), serpentine, graphite, galena, or sphalerite"];
var ismAdditionalFeatures = ["Rock looks metallic (silverly, brassy, or copper-like) and scaly or smooth", "Rock is vesicular (has bubble-shaped holes/cavities or looks frothy)", "Rock is very hard and has ropy, streamlined flow structures"];
var rockQuestion = "Which of the following best describes your Rock?";

var RockID = angular.module('RockID', []);

/* controller variables and methods */
RockID.controller('RockCtrl', ['$scope', function($scope) {
  $scope.rockType = rockTypeMessage;
  $scope.sedComp = null;
  $scope.texture = null;
  $scope.composition = null;
  $scope.rockName = null;
  $scope.url = null;
  $scope.items = rockTypes;

  $scope.itemClick = function(item) {
    /* set rock type */
    if($scope.rockType == rockTypeMessage)
        $scope.rockType = item;
    /* Igneous Rock */
    if($scope.rockType == rockTypes[0])
        ignRock(item);
    /* Sedimentary Rock */
    else if($scope.rockType == rockTypes[1])
        sedRock(item);
    /* Metamorphic Rock */
    else if($scope.rockType == rockTypes[2])
        metaRock(item);
    else if($scope.rockType == rockTypes [3])
        notSure(item);
  }

  /* Igneous rock flowchart logic */
  function ignRock(item) {
      /* prompt for texture */
     if($scope.texture == null) {
        $scope.texture = textureMessage;
        $scope.items = ignTextures;
     }
      /* set texture and prompt for mafic content */
     else if($scope.texture == textureMessage) {
        $scope.texture = item;
        $scope.composition = ignMaficContentMessage;
        $scope.items = ignMaficContent;
     }
     /* set mafic content, collapse items, display rock */
     else if($scope.composition == ignMaficContentMessage) {
       $scope.composition = item;
       $scope.items = null;
       displayIgnRock();
     }
  }

  /* Sedimentary rock flowchart logic */
  function sedRock(item) {
     /* prompt for composition */
     if($scope.sedComp == null) {
        $scope.sedComp = compMessage;
        $scope.items = sedCompositions;
     }
     /* set composition and prompt for texture */
     else if($scope.sedComp == compMessage) {
        $scope.sedComp = item;
        $scope.texture = textureMessage;
        if($scope.sedComp == sedCompositions[0])
          $scope.items = detritalTextures;
        else if($scope.sedComp == sedCompositions[1])
          $scope.items = biochemicalTextures;
        else if($scope.sedComp == sedCompositions[2])
          $scope.items = mineralCrystalTextures;
     }
     /* set texture, collapse items, display rock */
     else if($scope.texture == textureMessage) {
       $scope.texture = item;
       $scope.items = null;
       displaySedRock();
     }
  }

  /* Metamorphic rock flowchart logic */
  function metaRock(item) {
     /* prompt for texture */
     if($scope.texture == null) {
        $scope.texture = textureMessage;
        $scope.items = metaTextures;
     }
      /* set texture and prompt for composition */
     else if($scope.texture == textureMessage) {
       $scope.texture = item;
       $scope.composition = compMessage;
       if($scope.texture == metaTextures[0])
          $scope.items = foliatedFineGrainedComp;
       else if($scope.texture == metaTextures[1])
          $scope.items = foliatedCoarseGrainedComp;
       else if($scope.texture == metaTextures[2])
          $scope.items = nonfoliatedFineGrainedComp;
       else if($scope.texture == metaTextures[3])
          $scope.items = nonfoliatedCoarseGrainedComp;
     }
     /* set composition, collapse items, display rock */
     else if($scope.composition == compMessage) {
       $scope.composition = item;
       $scope.items = null;
       displayMetaRock();
     }
  }

  /* flowchart logic to determine the rock type */
  function notSure(item) {
    /* prompt for rock info*/
    if($scope.texture == null) {
       $scope.texture = rockQuestion;
       $scope.items = ism;
    }
    /* set texture and reprompt for more rock info */
    else if($scope.texture == rockQuestion) {
      $scope.texture = item;
      $scope.composition= rockQuestion;

      if($scope.texture == ism[0])
        $scope.items = ismLayers;
      else if($scope.texture == ism[1])
        $scope.items = ismNoVisibleGrains;
      else if($scope.texture == ism[2])
        $scope.items = ismVisibleGrains;
      else if($scope.texture == ism[3])
        $scope.items = ismAdditionalFeatures;
    }
    /* set composition, collapse items, display rock */
    else if($scope.composition == rockQuestion) {
      $scope.composition = item;
      $scope.items = null;
      displayRockType();
    }
  }

  function displayIgnRock() {
    for(var rock in ignRockList) {
      if(ignRockList[rock].texture == $scope.texture && ignRockList[rock].mci == $scope.composition) {
          $scope.rockName = ignRockList[rock].name;
          $scope.url = ignRockList[rock].url;
       }
      }
    }

  function displaySedRock() {
    for(var rock in sedRockList) {
          if(sedRockList[rock].comp == $scope.sedComp && sedRockList[rock].texture == $scope.texture) {
              $scope.rockName = sedRockList[rock].name;
              $scope.url = sedRockList[rock].url;
           }
     }
  }

  function displayMetaRock() {
    for(var rock in metaRockList) {
      if(metaRockList[rock].texture == $scope.texture && metaRockList[rock].comp == $scope.composition) {
          $scope.rockName = metaRockList[rock].name;
          $scope.url = metaRockList[rock].url;
       }
     }
  }

  function displayRockType() {
    switch($scope.texture) {
      case ism[0]:
        switch($scope.composition) {
          case ismLayers[0]: displaySed();
            break;
          case ismLayers[1]: displaySed();
            break;
          case ismLayers[2]: displayMeta();
            break;
          case ismLayers[3]: displaySed();
            break;
          case ismLayers[4]: displayMeta();
            break;
        }
        break;
      case ism[1]:
        switch($scope.composition) {
          case ismNoVisibleGrains[0]: displaySed();
            break;
          case ismNoVisibleGrains[1]: displayIgn();
            break;
          case ismNoVisibleGrains[2]: displayMeta();
            break;
          case ismNoVisibleGrains[3]: displaySed();
            break;
          case ismNoVisibleGrains[4]: displayIgn();
            break;
          case ismNoVisibleGrains[5]: displaySed();
            break;
        }
        break;
      case ism[2]:
        switch($scope.composition) {
          case ismVisibleGrains[0]: displaySed();
            break;
          case ismVisibleGrains[1]: displayMeta();
            break;
          case ismVisibleGrains[2]: displaySed();
            break;
          case ismVisibleGrains[3]: displaySed();
            break;
          case ismVisibleGrains[4]: displaySed();
            break;
          case ismVisibleGrains[5]: displayIgn();
            break;
          case ismVisibleGrains[6]: displayIgn();
            break;
          case ismVisibleGrains[7]: displaySed();
            break;
          case ismVisibleGrains[8]: displayMeta();
            break;
          case ismVisibleGrains[9]: displayMeta();
            break;
          case ismVisibleGrains[10]: displaySed();
            break;
          case ismVisibleGrains[11]: displaySed();
            break;
          case ismVisibleGrains[12]: displayIgn();
            break;
          case ismVisibleGrains[13]: displayMeta();
            break;

        }
        break;
      case ism[3]:
        switch($scope.composition) {
          case ismAdditionalFeatures[0]: displayMeta();
            break;
          case ismAdditionalFeatures[1]: displayIgn();
            break;
          case ismAdditionalFeatures[2]: displayIgn();
            break;
         }
        break;
    }
  }

  function displayIgn() {
    $scope.rockName = "Igneous";
    $scope.url = "https://geology.com/rocks/igneous-rocks.shtml";
  }

  function displaySed() {
    $scope.rockName = "Sedimentary";
    $scope.url = "https://geology.com/rocks/sedimentary-rocks.shtml";
  }

  function displayMeta() {
    $scope.rockName = "Metamorphic";
    $scope.url = "https://geology.com/rocks/metamorphic-rocks.shtml";
  }

  /* reset variables method to start app over */
  $scope.reset = function() {
    $scope.rockType = rockTypeMessage;
    $scope.sedComp = null;
    $scope.texture = null;
    $scope.composition = null;
    $scope.rockName = null;
    $scope.url = null;
    $scope.items = rockTypes;
  }
}]);
