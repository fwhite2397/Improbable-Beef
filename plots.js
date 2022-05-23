function init() {
    var selector = d3.select("#selDataset");

    selector
    .append("option")
    .text("")
    .property("value", -1);
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}

  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
//      PANEL.append("h6").text(result.location);
      Object.entries(result).forEach(([key, value]) =>
        {PANEL.append("h6").text(key + ': ' + value);});

//      d3.json("samples.json").then(function(data){
//        firstPerson = data.metadata[0];
//        Object.entries(firstPerson).forEach(([key, value]) =>
//          {console.log(key + ': ' + value);});
//      });      

    });
  }

  function buildCharts(sample) {
    d3.json("samples.json").then((data) => {    
      // 3. Create a variable that holds the samples array. 
      var samples = data.samples;

      // 4. Create a variable that filters the samples for the object with the desired sample number.
      var resultArray = samples.filter(sampleObj => sampleObj.id == sample);

      //  5. Create a variable that holds the first sample in the array.
      var result = resultArray[0];

      // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
            console.log(result);

//      var otu_label_val = d3.select("#same-samples-otu_labels");
//      var sample_vals = d3.select("#sample-samples-sample_values");

      // 7. Create the yticks for the bar chart.
      // Hint: Get the the top 10 otu_ids and map them in descending order  
      //  so the otu_ids with the most bacteria are last. 
//      var sortedOtuIds = otu_id_val.sort((a,b) =>
//      a.otu_ids - b.otu_ids).reverse();

//      var top10otu = sortedOtuIds.slice(0,10);

//      console.log(top10otu);
      
//      var yticks = 

      // 8. Create the trace for the bar chart. 
//      var barData = [
      
//      ];

      // 9. Create the layout for the bar chart. 
//      var barLayout = {
//      };
    })
  }
  
  init();