//https://www.codewars.com/kata/56c22c5ae8b139416c00175d/

function match(candidate, job) {
  if (!(candidate.hasOwnProperty("minSalary") && job.hasOwnProperty("maxSalary"))) {
    throw new Error();
  }
  return job.maxSalary >= (90 / 100) * candidate.minSalary;
}


//https://www.codewars.com/kata/56c2578be8b139bd5c001bd8/train/javascript

function match(job, candidates) {
  return candidates.filter((candidate) => {
    if (candidate.desiresEquity && job.equityMax <= 0) {
      return false;
    }
    for (const city of [
      candidate.currentLocation,
      ...candidate.desiredLocations,
    ]) {
      if (job["locations"].includes(city)) {
        return true;
      }
    }
  });
}
