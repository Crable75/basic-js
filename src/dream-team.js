module.exports = function createDreamTeam(/* members */) {
  let members = arguments[0]
  if (!Array.isArray(members)) return false
  let teamName = []
  members.forEach(item => {
    typeof(item) === "string" ? teamName.push(item.replace(/\s/g, "")[0].toUpperCase()) : null
  })
  return teamName.sort().join("")
};