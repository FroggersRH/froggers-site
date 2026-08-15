/*
  Froggers ($FROG) — front-end script.
  Vanilla JS, no dependencies, no network calls. Everything below only
  touches local DOM state and local image assets already shipped in
  site/assets/. Safe to run fully offline (file://) or from any static host.
*/

(function () {
  "use strict";

  /* ---------------------------------------------------------------
   * Trait roller — a purely illustrative demo of the six trait
   * categories. It does NOT talk to a wallet, a node, or a contract.
   * It just swaps local preview images to show what "fresh random
   * traits on every mint" looks like. Real traits are generated
   * on-chain at mint time by the contracts, not by this script.
   * ------------------------------------------------------------- */

  var TRAIT_POOL = {
    background: [
      "fond_06_nuit.png",
      "fond_20_braise.png",
      "fond_24_etoiles.png",
      "fond_26_grille_retro.png",
      "fond_33_matrice.png",
      "fond_38_feux_follets.png"
    ],
    body: [
      "corps_20_neon_vert.png",
      "corps_21_neon_rose.png",
      "corps_24_or.png",
      "corps_29_alien.png",
      "corps_32_lave.png",
      "corps_34_fantome.png"
    ],
    eyes: [
      "yeux_16_laser_rouge.png",
      "yeux_17_laser_vert.png",
      "yeux_22_etoiles.png",
      "yeux_23_jackpot.png",
      "yeux_29_lunettes_noires.png",
      "yeux_34_visiere_cyborg.png"
    ],
    mouth: [
      "bouche_08_grillz_or.png",
      "bouche_13_sourire_carnassier.png",
      "bouche_24_cigare.png",
      "bouche_27_sucette.png",
      "bouche_33_moustache.png",
      "bouche_39_bisou.png"
    ],
    headwear: [
      "chef_08_couronne_penchee.png",
      "chef_13_casque_dastronaute.png",
      "chef_18_chapeau_de_cowboy.png",
      "chef_29_cornes_de_diable.png",
      "chef_33_helice.png",
      "chef_37_bandeau_ninja.png"
    ],
    accessory: [
      "acc_00_chaine_en_or.png",
      "acc_11_medaille_dor.png",
      "acc_26_casque_dj_au_cou.png",
      "acc_28_sac_banane.png",
      "acc_29_ceinture_de_champion.png",
      "acc_34_bandana_cou_rouge.png"
    ]
  };

  var TRAITS_DIR = "assets/traits/";

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function rollTraits() {
    // One tile, six stacked <img> layers (background at the bottom,
    // headwear on top) — each layer gets its own fresh random pick.
    var layers = document.querySelectorAll("[data-roll-layer]");
    if (!layers.length) return;

    layers.forEach(function (layer) {
      var category = layer.getAttribute("data-roll-layer");
      var pool = TRAIT_POOL[category];
      if (!pool) return;
      var file = pickRandom(pool);
      layer.src = TRAITS_DIR + file;
    });
  }

  function initRollDemo() {
    var button = document.querySelector("[data-roll-button]");
    if (!button) return;
    button.addEventListener("click", rollTraits);
    // Roll once on load so the demo isn't static.
    rollTraits();
  }

  /* ---------------------------------------------------------------
   * Footer year stamp — purely cosmetic, uses the visitor's local
   * clock only. No external time source.
   * ------------------------------------------------------------- */
  function stampYear() {
    var el = document.querySelector("[data-year]");
    if (el) {
      el.textContent = String(new Date().getFullYear());
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initRollDemo();
    stampYear();
  });
})();
