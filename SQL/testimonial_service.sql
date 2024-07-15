  CREATE TABLE testimonial_service (
    id SERIAL PRIMARY KEY,
    serviceID integer,
    comment TEXT,
    name VARCHAR(100),
    age integer null,
  );