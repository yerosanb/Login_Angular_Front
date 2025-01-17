$(document).ready(function () {
  var o,
    e = [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
    ]
  $('#the-basics').typeahead(
    { hint: !0, highlight: !0, minLength: 1 },
    {
      name: 'states',
      source:
        ((o = e),
        function (e, a) {
          var t = []
          ;(substrRegex = new RegExp(e, 'i')),
            $.each(o, function (e, a) {
              substrRegex.test(a) && t.push(a)
            }),
            a(t)
        }),
    },
  )
  e = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: e,
  })
  $('#bloodhound').typeahead(
    { hint: !0, highlight: !0, minLength: 1 },
    { name: 'states', source: e },
  )
  var a = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch:
      'https://raw.githubusercontent.com/twitter/typeahead.js/gh-pages/data/countries.json',
  })
  $('#prefetch').typeahead(null, { name: 'countries', source: a })
  var t = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch:
      'https://raw.githubusercontent.com/twitter/typeahead.js/gh-pages/data/films/post_1960.json',
    remote: {
      url: '../plugins/typeahead/data/%QUERY.json',
      wildcard: '%QUERY',
    },
  })
  $('#remote').typeahead(null, {
    name: 'best-pictures',
    display: 'value',
    source: t,
  })
  var n = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    identify: function (e) {
      return e.team
    },
    prefetch:
      'https://raw.githubusercontent.com/twitter/typeahead.js/gh-pages/data/nfl.json',
  })
  $('#default-suggestions').typeahead(
    { minLength: 0, highlight: !0 },
    {
      name: 'nfl-teams',
      display: 'team',
      source: function (e, a) {
        '' === e
          ? a(n.get('Detroit Lions', 'Green Bay Packers', 'Chicago Bears'))
          : n.search(e, a)
      },
    },
  ),
    $('#custom-templates').typeahead(null, {
      name: 'best-pictures',
      display: 'value',
      source: t,
      templates: {
        empty: [
          '<div class="typeahead-empty-message">',
          'Unable to find any Best Picture winners that match the current query',
          '</div>',
        ].join('\n'),
        suggestion: Handlebars.compile(
          '<div><strong>{{value}}</strong> - {{year}}</div>',
        ),
      },
    })
  var s = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch:
        'https://raw.githubusercontent.com/twitter/typeahead.js/gh-pages/data/nba.json',
    }),
    i = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch:
        'https://raw.githubusercontent.com/twitter/typeahead.js/gh-pages/data/nhl.json',
    })
  $('#multiple-datasets').typeahead(
    { highlight: !0 },
    {
      name: 'nba-teams',
      display: 'team',
      source: s,
      templates: { header: '<h5 class="league-name">NBA Teams</h5>' },
    },
    {
      name: 'nhl-teams',
      display: 'team',
      source: i,
      templates: { header: '<h5 class="league-name">NHL Teams</h5>' },
    },
  )
})
