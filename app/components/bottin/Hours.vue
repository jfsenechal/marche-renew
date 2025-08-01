<script setup>
const {fiche} = defineProps({
  fiche: {
    type: Object,
    default: null
  }
})
</script>
<template>
  <div class=""
       v-if="fiche.horaires.length > 0">
    <h4 class="">Horaires</h4>
    <table class="">
      <thead>
      <tr>
        <th>Jour</th>
        <th>Fermé ?</th>
        <th>Ouvert à midi ?</th>
        <th>Ouverture<br/> matinée</th>
        <th>Fermeture<br/> matinée</th>
        <th>Ouverture<br/> après midi</th>
        <th>Fermeture<br/> après midi</th>
        <th>Sur Rdv</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="horaire in fiche.horaires">
        <td>{{ `jour${horaire.day}` }}</td>
        <td>
           if horaire.isClosed 
          <span class="fas fa-check"></span>
           endif 
        </td>
        <td>
           if horaire.isOpenAtLunch 
          <span class="fas fa-check"></span>
           endif 
        </td>
        <td>
           if not horaire.isClosed and horaire.morningStart 
          {{ horaire.morningStart  }}
           endif 
        </td>
        <td>
           if not horaire.isClosed and horaire.morningEnd 
          {{ horaire.morningEnd  }}
           endif 
        </td>
        <td>
           if not horaire.isClosed and horaire.noonStart 
          {{ horaire.noonStart  }}
           endif 
        </td>
        <td>
           if not horaire.isClosed and horaire.noonEnd 
          {{ horaire.noonEnd  }}
           endif 
        </td>
        <td>
           if not horaire.isClosed and horaire.isRdv 
          <span class="fas fa-check"></span>
           endif 
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>